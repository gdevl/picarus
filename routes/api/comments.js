const express = require("express");
const asyncHandler = require("express-async-handler");

const { Comment } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res, next) {
    const comments = await Comment.findAll();
    res.json({ comments });
  })
);

module.exports = router;
