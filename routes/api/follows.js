const express = require("express");
const asyncHandler = require("express-async-handler");

const { Follow } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res, next) {
    const follows = await Follow.findAll();
    res.json({ follows });
  })
);

module.exports = router;
