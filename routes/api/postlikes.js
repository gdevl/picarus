const express = require("express");
const asyncHandler = require("express-async-handler");

const { PostLike } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res, next) {
    const postLikes = await PostLike.findAll();
    res.json({ postLikes });
  })
);

module.exports = router;
