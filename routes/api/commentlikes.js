const express = require("express");
const { asyncErrorHandler, handleValidationErrors } = require("../../utils");

const { CommentLike } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncErrorHandler(async function (req, res, next) {
    const commentLikes = await CommentLike.findAll();
    res.json({ commentLikes });
  })
);

module.exports = router;
