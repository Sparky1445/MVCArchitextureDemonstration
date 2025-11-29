import express from 'express';
import commentRouter from './CommentRouter.js';
import { getTweetById, getTweets, createTweet } from '../../controllers/getTweets.js';
const router = express.Router();


router.use('/comments', commentRouter);

router.get('/', getTweets);
router.get('/:tweet_Id/:userName', getTweetById);
router.post('/', createTweet);

export default router;