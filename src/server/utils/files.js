const path = require("node:path");
const fs = require('fs')

function getRoot() {
  return path.dirname(path.dirname(path.dirname(path.dirname(__filename))));
}

function getPath(_folder_path) {
    const root = getRoot();
    const allPath = path.join(root, _folder_path);

    return allPath;
}

function getAllFolders(_path) {
    return fs.readdirSync(_path);
}

function getAllFiles(_folder_path) {
    return fs.readdirSync(_folder_path);
}

module.exports = {
    getPath,
    getAllFolders,
    getAllFiles
}