const express = require("express");
const { asyncErrorHandler, handleValidationErrors } = require("../../utils");

const { PostLike, User } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncErrorHandler(async function (req, res, next) {
    const postLikes = await PostLike.findAll();
    res.json({ postLikes });
  })
);


router.post(
  "/",
  asyncErrorHandler(async (req, res) => {
    const { uid, pid } = req.body;
    const postLike = await PostLike.create({ uid, pid });

    const newPostLike = await PostLike.findByPk(postLike.id, {
      include: {
        model: User, attributes: ['displayName']
      }
    })

    if (newPostLike) {
      return res.json(newPostLike);
    }

    res.json("An error occurred during like creation.");
  })
);

module.exports = router;
