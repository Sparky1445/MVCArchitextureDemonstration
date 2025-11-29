import express from 'express';
import tweetRouter from './TweetRouter.js';
import commentRouter from './CommentRouter.js';

const router = express.Router();

router.use('/tweets', tweetRouter);

router.use('/comments', commentRouter);

export default router;
