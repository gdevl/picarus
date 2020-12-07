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

module.exports = router;
