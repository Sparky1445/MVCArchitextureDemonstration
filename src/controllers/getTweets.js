export const getTweets = (req, res) => {
    return res.json({ message: 'Tweet dashboard!' });
};

export const getTweetById = (req, res) => {
    return res.json({
        message: 'Tweet by Id!',
        tweetId: req.params.tweet_Id,
        userName: req.params.userName
    });
};

export const createTweet = (req, res) => {
    return res.json({ message: 'Tweet created!' });
};