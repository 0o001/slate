import * as Utilities from "~/node_common/utilities";
import * as Data from "~/node_common/data";

export default async (req, res) => {
  const id = Utilities.getIdFromCookie(req);
  if (!id) {
    return res.status(500).send({ decorator: "SERVER_GET_SLATES_TAGS", error: true });
  }

  const user = await Data.getUserById({
    id,
  });

  if (!user) {
    return res.status(404).send({
      decorator: "SERVER_GET_SLATE_USER_NOT_FOUND",
      error: true,
    });
  }

  if (user.error) {
    return res.status(500).send({
      decorator: "SERVER_GET_SLATE_USER_NOT_FOUND",
      error: true,
    });
  }

  const response = await Data.getSlatesByUserId({ userId: id });
  if (!response) {
    return res.status(404).send({ decorator: "SERVER_GET_SLATES_NOT_FOUND", error: true });
  }

  if (response.error) {
    return res.status(500).send({ decorator: "SERVER_GET_SLATES_NOT_FOUND", error: true });
  }

  const filteredTags = response
    .map((item) => item.data.tags)
    .flat()
    .filter((item) => Boolean(item));

  const dedupedTags = new Set(filteredTags);
  const tags = Array.from(dedupedTags);

  return res.status(200).send({ decorator: "SERVER_GET_SLATES_TAGS", tags });
};
