const express = require("express");
const { asyncErrorHandler, handleValidationErrors } = require("../../utils");

const { Follow } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncErrorHandler(async function (req, res, next) {
    const follows = await Follow.findAll();
    res.json({ follows });
  })
);

module.exports = router;
