const express = require("express");
const { asyncErrorHandler, handleValidationErrors } = require("../../utils");

const { Post, PostLike, User, Comment } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncErrorHandler(async function (req, res, next) {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["displayName"],
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["displayName"],
          },
        },
        {
          model: PostLike,
          include: {
            model: User,
            attributes: ["displayName"],
          },
        },
      ],
    });

    const postIds = {};

    posts.forEach((post) => {
      postIds[post.id] = post;
    });

    res.json(postIds);
  })
);

module.exports = router;
