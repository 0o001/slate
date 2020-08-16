import * as LibraryManager from "~/node_common/managers/library";
import * as Utilities from "~/node_common/utilities";

import B from "busboy";
import util from "util";

import { Readable } from "stream";

const HIGH_WATER_MARK = 1024 * 1024 * 3;

const ReadStream = function (object) {
  if (object instanceof Buffer || typeof object === "string") {
    Readable.call(this, {
      highWaterMark: HIGH_WATER_MARK,
      encoding: "utf8",
    });
  } else {
    Readable.call(this, { objectMode: true });
  }
  this._object = object;
};

util.inherits(ReadStream, Readable);

ReadStream.prototype._read = function () {
  this.push(this._object);
  this.push(null);
  this._object = null;
};

const createReadStream = (object) => {
  return new ReadStream(object);
};

export const formMultipart = (req, res, { user }) =>
  new Promise(async (resolve, reject) => {
    let form = new B({
      headers: req.headers,
      highWaterMark: HIGH_WATER_MARK,
    });

    let fields = [];
    let buffer = null;
    let target = null;

    form.on("file", function (fieldname, file, filename, encoding, mime) {
      file.on("data", (data) => {
        fields.push(data);
      });

      file.on("end", () => {
        target = {
          type: mime,
          name: filename,
        };

        buffer = Buffer.concat(fields);
      });
    });

    form.on("error", (e) => {
      return reject({
        decorator: "SERVER_UPLOAD_PARSE_FAILURE",
        error: true,
        message: e,
      });
    });

    form.on("finish", async () => {
      const data = LibraryManager.createLocalDataIncomplete(target);
      const stream = createReadStream(buffer);

      let push;
      try {
        const { buckets, bucketKey } = await Utilities.getBucketAPIFromUserToken(user.data.tokens.api);
        push = await buckets.pushPath(bucketKey, data.name, stream);
      } catch (e) {
        return reject({
          decorator: "SERVER_BUCKETS_PUSH_ISSUE",
          error: true,
          message: e,
        });
      }

      let ipfs = push.path.path;
      try {
        const { buckets, bucketKey } = await Utilities.getBucketAPIFromUserToken(user.data.tokens.api);
        const newUpload = await buckets.listIpfsPath(ipfs);
        data.size = newUpload.size;
      } catch (e) {
        return reject({
          decorator: "SERVER_BUCKETS_VERIFY_ISSUE",
          error: true,
          message: e,
        });
      }

      return resolve({ decorator: "SERVER_UPLOAD_SUCCESS", data, ipfs });
    });

    return req.pipe(form);
  });
