const path = require("node:path");

function get_root_path() {
  return path.dirname(path.dirname(path.dirname(__filename)));
}

function get_views_folder() {
  return path.join(get_root_path(), "frontend", "views");
}

module.exports = {
  get_root_path,
  get_views_folder,
};
