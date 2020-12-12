const express = require("express");
const { asyncErrorHandler, handleValidationErrors } = require("../../utils");

const { Post, PostLike, User, Comment } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncErrorHandler(async function (req, res, next) {
    console.log("IN POSTS ROUTE");
    const posts = await Post.findAll({
      include: [User, Comment, PostLike],
    });

    const postIds = {};

    console.log("POSTS");
    console.log(posts);
    posts.forEach((post) => {
      postIds[post.id] = post;
    });

    res.json(postIds);
  })
);

module.exports = router;
