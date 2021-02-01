const express = require('express');
const { asyncErrorHandler, handleValidationErrors } = require('../../utils');

const { PostLike, User } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncErrorHandler(async function (req, res, next) {
        const postLikes = await PostLike.findAll();
        res.json({ postLikes });
    })
);

router.get(
    '/:id',
    asyncErrorHandler(async (req, res, next) => {
        const postLikeId = parseInt(req.params.id);
        const postLike = await PostLike.findByPk(postLikeId);
        const { id, uid, pid } = postLike;

        if (!postLike) {
            const err = new Error('No Like Found');
            err.status = 404;
            err.title = 'Invalid Request';
            err.errors = ['Like does not exist'];
            return next(err);
        }

        res.json({ postLike: { id, uid, pid } });
    })
);

router.post(
    '/',
    asyncErrorHandler(async (req, res) => {
        const { uid, pid } = req.body;
        const postLike = await PostLike.create({ uid, pid });

        const newPostLike = await PostLike.findByPk(postLike.id, {
            include: {
                model: User,
                attributes: ['displayName'],
            },
        });

        if (newPostLike) {
            return res.json(newPostLike);
        }

        res.json('An error occurred during like creation.');
    })
);

router.delete(
    '/:id',
    asyncErrorHandler(async (req, res) => {
        const postLikeId = parseInt(req.params.id);
        const postLike = await PostLike.findByPk(postLikeId);

        if (postLike) {
            await postLike.destroy();
            return res.json({ deletedPostLikeId: postLikeId });
        }
        res.json('An error occurred during like destruction.');
    })
);

module.exports = router;
