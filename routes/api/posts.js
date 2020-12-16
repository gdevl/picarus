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

    const postIds = {
    };
    
    posts.forEach((post) => {
      postIds[post.id] = post;
    });

    res.json(postIds);
  })
);

router.post(
  "/",
  asyncErrorHandler(async (req, res) => {
    const { uid, content, imageUrl } = req.body;
    const post = await Post.create({ uid, content, imageUrl });

    const newPost = await Post.findByPk(post.id, {
      include: {
        model: User, attributes: ['displayName']
      }
    })

    if (newPost) {
      return res.json(newPost);
    }

    res.json("An error occurred during post creation.");
  })
);


module.exports = router;
