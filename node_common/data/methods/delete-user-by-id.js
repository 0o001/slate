import * as Data from "~/node_common/data";

import { runQuery } from "~/node_common/data/utilities";

export default async ({ id }) => {
  return await runQuery({
    label: "DELETE_USER_BY_ID",
    queryFn: async (DB) => {
      const keys = await DB.from("keys").where({ ownerId: id }).del();

      const followers = await DB.from("subscriptions").where({ userId: id }).del();

      const deletedSubscriptions = await DB.from("subscriptions")
        .where({ ownerId: id })
        .whereNotNull("slateId")
        .del()
        .returning("slateId");

      for (let slateId of deletedSubscriptions) {
        await Data.recalcSlateSubscribers({ slateId });
      }

      const deletedFollowing = await DB.from("subscriptions")
        .where({ ownerId: id })
        .whereNotNull("userId")
        .del()
        .returning("userId");

      const followingSummaryQuery = await DB.from("users")
        .whereIn("id", deletedFollowing)
        .decrement("followerCount", 1);

      const activity = await DB.from("activity")
        .where({ ownerId: id })
        .orWhere({ userId: id })
        .del();

      const usage = await DB.from("usage").where("userId", id).del();

      const data = await DB.from("users").where({ id }).del();

      return 1 === data;
    },
    errorFn: async (e) => {
      return {
        error: true,
        decorator: "DELETE_USER_BY_ID",
      };
    },
  });
};
