import express from 'express';
import tweetRouter from './TweetRouter.js';
const router = express.Router();

router.use('/tweets', tweetRouter);

router.get('/', (req, res) => {
    return res.json({ message: 'v2 Dashboard!' });

});

export default router;