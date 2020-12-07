const express = require("express");
const { asyncErrorHandler, handleValidationErrors } = require("../../utils");

const { Post } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncErrorHandler(async function (req, res, next) {
    const posts = await Post.findAll();
    res.json({ posts });
  })
);

module.exports = router;
