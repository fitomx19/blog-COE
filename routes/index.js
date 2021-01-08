const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
    res.render("index");
  });

  module.exports = router;

  router.get("/post1", async (req, res) => {
    res.render("Post1");
  });

  module.exports = router;