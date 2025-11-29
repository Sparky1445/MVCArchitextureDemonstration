export const createManualTweetValidator = (req, res, next) => {

    if (!(req.body.tweet) || req.body.tweet.length > 140) {
        return res.status(400).json({ error: "Tweet can't be empty or more than 140 characters" })
    }
    next();
};