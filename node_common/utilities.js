import * as Environment from "~/node_common/environment";
import * as Strings from "~/common/strings";
import * as Validations from "~/common/validations";
import * as Constants from "~/node_common/constants";
import * as Data from "~/node_common/data";
import * as Social from "~/node_common/social";
import * as Logging from "~/common/logging";
import * as ArrayUtilities from "~/node_common/array-utilities";
import * as Monitor from "~/node_common/monitor";
import * as Arrays from "~/common/arrays";
import * as Utilities from "~/common/utilities";

import SearchManager from "~/node_common/managers/search";

import crypto from "crypto";
import JWT from "jsonwebtoken";
import BCrypt from "bcrypt";

const ENCRYPTION_ALGORITHM = "aes-256-ctr";
const ENCRYPTION_IV = crypto.randomBytes(16);

export const getIdFromCookieValue = (token) => {
  if (!Strings.isEmpty(token)) {
    try {
      const decoded = JWT.verify(token, Environment.JWT_SECRET);
      return decoded.id;
    } catch (e) {
      Logging.error(e.message);
    }
  }
};

export const getIdFromCookie = (req) => {
  let id = null;
  if (Strings.isEmpty(req.headers.cookie)) {
    return id;
  }

  const token = req.headers.cookie.replace(
    /(?:(?:^|.*;\s*)WEB_SERVICE_SESSION_KEY\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  return getIdFromCookieValue(token);
};

export const encryptWithSecret = async (text, secret) => {
  const cipher = crypto.createCipheriv(ENCRYPTION_ALGORITHM, secret, ENCRYPTION_IV);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: ENCRYPTION_IV.toString("hex"),
    hex: encrypted.toString("hex"),
  };
};

export const encryptPassword = async (text, salt) => {
  if (!text) {
    return null;
  }

  let hash = text;
  for (let i = 0; i < Environment.LOCAL_PASSWORD_ROUNDS_MANUAL; i++) {
    hash = await BCrypt.hash(hash, salt);
  }
  hash = await BCrypt.hash(hash, Environment.LOCAL_PASSWORD_SECRET);

  return hash;
};

export const parseAuthHeader = (value) => {
  if (typeof value !== "string") {
    return null;
  }

  var matches = value.match(/(\S+)\s+(\S+)/);
  return matches && { scheme: matches[1], value: matches[2] };
};

export const getFileName = (s) => {
  let target = s;
  if (target.endsWith("/")) {
    target = target.substring(0, target.length - 1);
  }

  return target.substr(target.lastIndexOf("/") + 1);
};

export const createFolder = ({ id, name }) => {
  return {
    decorator: "FOLDER",
    id,
    folderId: id,
    icon: "FOLDER",
    name: name ? name : getFileName(id),
    pageTitle: `Exploring ${getFileName(id)}`,
    date: null,
    size: null,
    children: [],
  };
};

export const updateStateData = async (state, newState) => {
  return {
    ...state,
    ...newState,
  };
};

export const generateRandomNumberInRange = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

// NOTE(daniel): get all tags on slates and files
export const getUserTags = ({ library }) => {
  let tags = new Set();

  const isNotEmptyArray = (arr) => Array.isArray(arr) && arr?.length > 0;

  library.forEach((item) => {
    if (isNotEmptyArray(item.tags)) {
      for (let tag of item.tags) {
        tags.add(tag);
      }
    }
  });

  return Array.from(tags);
};

export const addToSlate = async ({ slate, files, user, saveCopy = false }) => {
  let { filteredFiles } = await ArrayUtilities.removeDuplicateSlateFiles({
    files,
    slate,
  });

  if (!filteredFiles.length) {
    return { added: 0 };
  }

  let response = await Data.createSlateFiles({ owner: user, slate, files: filteredFiles });
  if (!response || response.error) {
    return {
      decorator: saveCopy
        ? "SERVER_SAVE_COPY_ADD_TO_SLATE_FAILED"
        : "SERVER_CREATE_FILE_ADD_TO_SLATE_FAILED",
      added: 0,
    };
  }

  if (saveCopy) {
    Monitor.saveCopy({ user, slate, files: filteredFiles });
  } else {
    Monitor.upload({ user, slate, files: filteredFiles });
  }

  await Data.updateSlateById({ id: slate.id, updatedAt: new Date() });

  if (slate.isPublic) {
    addToPublicCollectionUpdatePrivacy({ filteredFiles });
  }

  addToSlateCheckCoverImage(slate, files);

  return { added: response.length };
};

export const removeFromPublicCollectionUpdatePrivacy = async ({ files }) => {
  let targetFiles = Arrays.filterPublic(files);
  let madePrivate = [];
  for (let file of targetFiles) {
    let updatedFile = await Data.recalcFilePrivacy({ fileId: file.id });
    if (!updatedFile) continue;
    if (file.isPublic && !updatedFile.isPublic) {
      madePrivate.push(updatedFile);
    }
  }
  return madePrivate;
};

export const addToPublicCollectionUpdatePrivacy = async ({ files }) => {
  let targetFiles = Arrays.filterPrivate(files);
  let madePublic = [];
  for (let file of targetFiles) {
    let updatedFile = await Data.recalcFilePrivacy({ fileId: file.id });
    if (!updatedFile) continue;
    if (!file.isPublic && updatedFile.isPublic) {
      madePublic.push(updatedFile);
    }
  }
  return madePublic;
};

export const selectSlateCoverImage = (objects) => {
  let selectedObject;
  if (!objects.length) return null;
  for (let object of objects) {
    if (Utilities.getImageUrlIfExists(object)) {
      selectedObject = object;
      break;
    }
  }
  selectedObject = objects[0];
  let { tags, oldData, ...cleanedObject } = selectedObject;
  return cleanedObject;
};

export const addToSlateCheckCoverImage = async (slate, filesAdded) => {
  if (Utilities.getImageUrlIfExists(slate.coverImage)) {
    return;
  }
  if (!filesAdded) return;
  let files;
  if (Array.isArray(filesAdded)) {
    files = filesAdded;
  } else {
    files = [filesAdded];
  }
  let newObjects = (slate.objects || []).concat(files);
  let coverImage = selectSlateCoverImage(newObjects);
  if (coverImage?.id !== slate.coverImage?.id) {
    slate.coverImage = coverImage;
    let updatedSlate = await Data.updateSlateById(slate);
    await SearchManager.updateSlate(updatedSlate);
  }
};

export const removeFromSlateCheckCoverImage = async (slate, fileIdsRemoved) => {
  if (!slate.coverImage) return;
  let fileIds;
  if (Array.isArray(fileIdsRemoved)) {
    fileIds = fileIdsRemoved;
  } else {
    fileIds = [fileIdsRemoved];
  }
  for (let fileId of fileIds) {
    if (fileId === slate.coverImage.id) {
      let newObjects = slate.objects.filter((obj) => !fileIds.includes(obj.id));
      let coverImage = selectSlateCoverImage(newObjects);
      slate.coverImage = coverImage;
      let updatedSlate = await Data.updateSlateById(slate);
      await SearchManager.updateSlate(updatedSlate);
      return;
    }
  }
};
