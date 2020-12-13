const express = require("express");
const { asyncErrorHandler, handleValidationErrors } = require("../../utils");

const { Comment } = require("../../db/models");

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

    if (comment) {
      return res.json(comment);
    }

    // res.status(201).json({
    //   comment: { content: comment.content, uid: comment.uid, pid: comment.pid },
    // });

    res.json("An error occurred during comment creation.");
  })
);

module.exports = router;
