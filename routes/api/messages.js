const express = require("express");
const { asyncErrorHandler, handleValidationErrors } = require("../../utils");

const { Message } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncErrorHandler(async function (req, res, next) {
    const messages = await Message.findAll();
    res.json({ messages });
  })
);

module.exports = router;
