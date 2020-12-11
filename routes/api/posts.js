const express = require("express");
const { asyncErrorHandler, handleValidationErrors } = require("../../utils");

const { Post } = require("../../db/models");
const { User } = require("../../db/models");
const { Comment } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncErrorHandler(async function (req, res, next) {
    console.log("IN POSTS ROUTE");
    const posts = await Post.findAll({
      include: [User, Comment],
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
