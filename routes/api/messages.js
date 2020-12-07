const express = require("express");
const asyncHandler = require("express-async-handler");

const { Message } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async function (req, res, next) {
    const messages = await Message.findAll();
    res.json({ messages });
  })
);

module.exports = router;
