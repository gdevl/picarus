const express = require('express');
const { asyncErrorHandler, handleValidationErrors } = require('../../utils');

const { Follow, User } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncErrorHandler(async function (req, res, next) {
        const follows = await Follow.findAll();
        res.json({ follows });
    })
);

// follow user
router.post(
    '/',
    asyncErrorHandler(async (req, res) => {
        const { uid, fid } = req.body;
        const follow = await Follow.create({ uid, fid });

        const newFollow = await Follow.findByPk(follow.id, {
            include: {
                model: User,
                attributes: ['displayName'],
            },
        });

        if (newFollow) {
            return res.json(newFollow);
        }

        res.json('An error occurred during follow creation.');
    })
);

// unfollow user
router.delete(
    '/:id',
    asyncErrorHandler(async (req, res) => {
        const followId = parseInt(req.params.id);
        const follow = await Follow.findByPk(followId);

        if (follow) {
            await follow.destroy();
            return res.json({ deletedFollowId: followId });
        }
        res.json('An error occurred during follow destruction.');
    })
);

module.exports = router;
