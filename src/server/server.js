const { get_views_folder } = require("./utils/files");

const express = require("express");

const app = express();
const port = 3000;

require("./routes")(app);

app.set("view engine", "ejs");
app.set("views", get_views_folder());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
