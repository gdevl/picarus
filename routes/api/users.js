const express = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { asyncErrorHandler, handleValidationErrors } = require("../../utils");
const { getUserToken, requireAuth } = require("../../auth");

const { User } = require("../../db/models");

const router = express.Router();

const validateEmailAndPassword = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email address."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password."),
  handleValidationErrors,
];

const validateSignUp = [
  check("displayName")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a display name")
    .isLength({ max: 50 })
    .withMessage("Display name must not be more than 50 characters long")
    .custom((value) => {
      return User.findOne({ where: { displayName: value } }).then((user) => {
        if (user) {
          return Promise.reject(
            "The display name provided is already in use by another account"
          );
        }
      });
    }),
  check("email")
    .isEmail()
    .withMessage("Please provide a valid email.")
    .isLength({ max: 255 })
    .withMessage("Email Address must not be more than 255 characters long")
    .custom((value) => {
      return User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject(
            "The email address provided is already in use by another account"
          );
        }
      });
    }),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a password.")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long.")
    .isLength({ max: 50 })
    .withMessage("Password must not be more than 50 characters long"),
  // check("confirmPassword")
  //   .isLength({ max: 50 })
  //   .withMessage("Confirm Password must not be more than 50 characters long")
  //   .custom((value, { req }) => {
  //     if (value !== req.body.password) {
  //       throw new Error("Confirm Password does not match Password");
  //     }
  //     return true;
  //   }),
  handleValidationErrors,
];

router.get(
  "/",
  asyncErrorHandler(async function (req, res, next) {
    const users = await User.findAll();
    res.json({ users });
  })
);

router.get(
  "/:id",
  asyncErrorHandler(async (req, res, next) => {
    const userId = parseInt(req.params.id);
    const user = await User.findByPk(userId);
    const { id, displayName, email } = user;

    if (!user) {
      const err = new Error("No User Found");
      err.status = 404;
      err.title = "Invalid User";
      err.errors = ["User does not exist"];
      return next(err);
    }

    res.json({ user: { id, displayName, email } });
  })
);

router.post(
  "/",
  validateSignUp,
  asyncErrorHandler(async (req, res) => {
    const { displayName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ displayName, email, hashedPassword });

    const token = getUserToken(user);
    res.cookie("token", token);
    res.status(201).json({
      user: { id: user.id, displayName: user.displayName, email: user.email },
      token,
    });
  })
);

router.post(
  "/signin",
  asyncErrorHandler(async function (req, res, next) {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user || !user.validatePassword(password)) {
      const err = new Error("Login failed");
      err.status = 401;
      err.title = "Login failed";
      err.errors = ["The provided credentials were invalid."];
      return next(err);
    }
    const token = getUserToken(user);
    res.json({
      token,
      user: { id: user.id, displayName: user.displayName, email: user.email },
    });

    // console.log("USER");
    // console.log(user);
    // res.json(user);
  })
);

module.exports = router;
