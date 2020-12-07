const express = require("express");
const { asyncErrorHandler, handleValidationErrors } = require("../../utils");

const { PostLike } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncErrorHandler(async function (req, res, next) {
    const postLikes = await PostLike.findAll();
    res.json({ postLikes });
  })
);

module.exports = router;
