const express = require("express");
const asyncHandler = require("express-async-handler");

const { CommentLike } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res, next) {
    const commentLikes = await CommentLike.findAll();
    res.json({ commentLikes });
  })
);

module.exports = router;
