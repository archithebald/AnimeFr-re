const { getPath, getAllFolders, getAllFiles } = require("./utils/files.js");

const path = require("node:path");
const express = require("express");

module.exports = function (app) {
  const templatesPath = getPath("src\\frontend\\views");

  app.set("views", templatesPath);
  app.set("view engine", "ejs");

  const routesFolderPath = getPath("src\\server\\routes");
  const folders = getAllFolders(routesFolderPath);

  folders.forEach((folder) => {
    let allFiles = getAllFiles(path.join(routesFolderPath, folder));

    if (allFiles.length > 0) {
      allFiles.forEach((file) => {
        let pathRouter = require(`./routes/${folder}/${file}`);
        let folderPath = `/${folder}`;
        app.use(folderPath, pathRouter);
      });
    }
  });
};
