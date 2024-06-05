require("dotenv").config();
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { title: process.env.TITLE });
});

module.exports = router;
