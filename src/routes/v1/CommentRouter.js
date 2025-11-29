import express from 'express';

const router = express.Router();



router.get('/', (req, res) => {
    return res.json({ message: 'Comment Dashboard!' });
});

router.get('/:Comment_Id/:userName', (req, res) => {
    return res.json({
        message: `Comment Details for ${req.params.userName} : ${req.params.tweet_Id}`
    });
});

export default router;