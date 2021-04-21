import * as Data from "~/node_common/data";
import * as Strings from "~/common/strings";
import * as Constants from "~/common/constants";

export default async (req, res) => {
  const users = await Data.getEveryUser();
  for (let user of users) {
    if (user.data?.library[0]?.children?.length) {
      let library = user.data.library[0].children;
      for (let file of library) {
        delete file.icon;
        if (!file.cid) {
          if (file.ipfs.includes("/ipfs/")) {
            file.cid = Strings.getCIDFromIPFS(file.ipfs);
          } else {
            file.cid = file.ipfs;
          }
        }
        delete file.ipfs;
        delete file.retrieval;
        delete file.storage;
        delete file.job;
        delete file.networks;
        if (file.file && !file.name) {
          file.name = file.file;
        }
        delete file.error;
        if (file.ipfs || !file.cid || file.icon) {
          console.log("FAILED! error: missing cid or has ipfs or has icon");
          console.log(file);
        }
        // console.log(file);
      }
      // let response = Data.updateUserById({ id: user.id, data: user.data });
      // if (!response || response.error) {
      //   console.log(`UPDATE FAILED for user with id ${user.id}`);
      // }

      // NOTE(martina): uncomment to test
      // for (let file of user.data.library[0].children) {
      //   if (file.ipfs || !file.cid) {
      //     console.log("FAILED! error: missing cid or has ipfs");
      //     console.log(file);
      //   }
      // }
    }
  }
  console.log("finished checking");
  return res.status(200).send({ decorator: "SERVER_CLEAN_USER", data: true });
};
