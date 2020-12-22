const express = require("express");
const { asyncErrorHandler, handleValidationErrors } = require("../../utils");
const { Post, PostLike, User, Comment } = require("../../db/models");
const router = express.Router();
const AWS = require("aws-sdk");
const { awsKeys } = require("../../config");
const multer = require("multer");
const upload = multer();

router.get(
  "/",
  asyncErrorHandler(async function (req, res, next) {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["displayName"],
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["displayName"],
          },
        },
        {
          model: PostLike,
          include: {
            model: User,
            attributes: ["displayName"],
          },
        },
      ],
    });

    const postIds = {};

    posts.forEach((post) => {
      postIds[post.id] = post;
    });

    res.json(postIds);
  })
);

// post creation route //
// aws s3 config //

AWS.config.update({
  secretAccessKey: awsKeys.secretAccessKey,
  accessKeyId: awsKeys.accessKeyId,
  region: awsKeys.region,
});

const fileFilter = (req, res, next) => {
  const file = req.files[0];
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    next();
  } else {
    next({ status: 422, errors: ["Invalid Mime Type: JPEG and PNG only"] });
  }
};

router.post(
  "/",
  upload.any(),
  fileFilter,
  asyncErrorHandler(async (req, res, next) => {
    // handle uploaded file//
    const file = req.files[0];
    const params = {
      Bucket: "picarus",
      Key: Date.now().toString() + file.originalname,
      Body: file.buffer,
      ACL: "public-read",
      ContentType: file.mimetype,
    };
    const promise = s3.upload(params).promise();
    const uploadedImage = await promise;
    const url = uploadedImage.Location;

    const { uid, content } = req.body;
    const post = await Post.create({ uid, content, url });

    const newPost = await Post.findByPk(post.id, {
      include: {
        model: User,
        attributes: ["displayName"],
      },
    });

    if (newPost) {
      return res.json(newPost);
    }

    res.json("An error occurred during post creation.");
  })
);

module.exports = router;
