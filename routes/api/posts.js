const express = require("express");
const { asyncErrorHandler, handleValidationErrors } = require("../../utils");

const { Post } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncErrorHandler(async function (req, res, next) {
    const posts = await Post.findAll();
    const postIds = {};

    posts.map((post) => {
      postIds[post.id] = post;
    });
    res.json(postIds);
  })
);

module.exports = router;
