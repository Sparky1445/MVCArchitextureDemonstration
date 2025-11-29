import express from 'express';

const router = express.Router();




router.get('/', (req, res) => {
    return res.json({ message: 'Tweet Dashboard from v2!' });
});



router.get('/:tweet_Id/:userName', (req, res) => {
    return res.json({
        message: `Tweet Details for ${req.params.userName} : ${req.params.tweet_Id} from v2`
    });
});

export default router;