const express = require("express");
const { asyncErrorHandler, handleValidationErrors } = require("../../utils");

const { Comment, User } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncErrorHandler(async function (req, res, next) {
    const comments = await Comment.findAll();
    res.json({ comments });
  })
);

router.post(
  "/",
  asyncErrorHandler(async (req, res) => {
    const { content, uid, pid } = req.body;
    const comment = await Comment.create({ content, uid, pid });

    const newComment = await Comment.findByPk(comment.id, {
      include: {
        model: User, attributes: ['displayName']
      }
    })

    if (newComment) {
      return res.json(newComment);
    }

    res.json("An error occurred during comment creation.");
  })
);

module.exports = router;
