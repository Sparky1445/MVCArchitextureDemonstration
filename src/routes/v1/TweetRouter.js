import express from 'express';
import commentRouter from './CommentRouter.js';
import { getTweetById, getTweets, createTweet } from '../../controllers/getTweets.js';
import TweetZodSchema from '../../validators/TweetZodSchema.js';
import validate from '../../validators/zodValidator.js';
import { s3Uploader } from '../../config/multerConfig.js';
import { getTweetByIdValidator } from '../../validators/getTweetByIdValidator.js';
import { deleteTweet } from '../../controllers/getTweets.js';
import { updateTweet } from '../../controllers/getTweets.js';

const router = express.Router();


router.use('/comments', commentRouter);

router.get('/', getTweets);
router.get('/:tweet_Id', getTweetByIdValidator, getTweetById);
router.post('/', s3Uploader.single('tweetImage'), validate(TweetZodSchema), createTweet);
router.delete('/:tweet_Id', getTweetByIdValidator, deleteTweet);
router.put('/:tweet_Id', getTweetByIdValidator, updateTweet);

export default router;