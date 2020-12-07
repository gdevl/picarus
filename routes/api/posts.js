const express = require("express");
const asyncHandler = require("express-async-handler");

const { Post } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res, next) {
    const posts = await Post.findAll();
    res.json({ posts });
  })
);

module.exports = router;