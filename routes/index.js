const express = require("express");
const router = express.Router();


router.get("/", async (req, res) => {
    res.render("index");
  });

  module.exports = router;

  router.get("/post1", async (req, res) => {
    res.render("Post1");
  });
  router.get("/post2", async (req, res) => {
    res.render("Post2");
  });
  router.get("/post3", async (req, res) => {
    res.render("Post3");
  });
  router.get("/post4", async (req, res) => {
    res.render("Post4");
  });
  router.get("/post5", async (req, res) => {
    res.render("Post0");
  });

  router.get("/nosotros", async (req, res) => {
    res.render("Nosotros");
  });

  module.exports = router;