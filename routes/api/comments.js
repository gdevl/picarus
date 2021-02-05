const express = require('express');
const { asyncErrorHandler, handleValidationErrors } = require('../../utils');

const { Comment, User } = require('../../db/models');

const router = express.Router();

router.get(
    '/',
    asyncErrorHandler(async function (req, res, next) {
        const comments = await Comment.findAll();
        res.json({ comments });
    })
);

router.get(
    '/:id',
    asyncErrorHandler(async (req, res, next) => {
        const commentId = parseInt(req.params.id);
        const comment = await Comment.findByPk(commentId);
        const { id, uid, pid, content } = comment;

        if (!comment) {
            const err = new Error('Comment Not Found');
            err.status = 404;
            err.title = 'Invalid Request';
            err.errors = ['Comment does not exist'];
            return next(err);
        }

        res.json({ comment: { id, uid, pid, content } });
    })
);

router.post(
    '/',
    asyncErrorHandler(async (req, res) => {
        const { content, uid, pid } = req.body;
        const comment = await Comment.create({ content, uid, pid });

        const newComment = await Comment.findByPk(comment.id, {
            include: {
                model: User,
                attributes: ['displayName'],
            },
        });

        if (newComment) {
            return res.json(newComment);
        }

        res.json('An error occurred during comment creation.');
    })
);

router.delete(
    '/',
    asyncErrorHandler(async (req, res) => {
        const { userId, postId } = req.body;
        const comment = await Comment.findOne({
            where: {
                uid: userId,
                pid: postId,
            },
        });
        const { id, uid, pid } = comment;

        if (comment) {
            await comment.destroy();
            return res.json({ id, uid, pid });
        }
        res.json('An error occurred during comment destruction.');
    })
);

// router.delete(
//     '/:id',
//     asyncErrorHandler(async (req, res) => {
//         const commentId = parseInt(req.params.id);
//         const comment = await Comment.findByPk(commentId);

//         if (comment) {
//             await comment.destroy();
//             return res.json({ deletedCommentId: commentId });
//         }
//         res.json('An error occurred during comment destruction.');
//     })
// );

module.exports = router;
