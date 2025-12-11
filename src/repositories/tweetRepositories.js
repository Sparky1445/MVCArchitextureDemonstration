import Tweet from '../schema/tweet.js';

export const createTweet = async ({ body, image }) => {
    try {
        const tweet = await Tweet.create({ tweet: body, tweetImage: image });
        return tweet;
    }
    catch (error) {

        throw error;
    }
};

export const getTweets = async () => {
    try {

        const tweets = await Tweet.find();
        //  console.log(tweets);
        return tweets;
    }
    catch (error) {
        throw error;
    }
};

export const getTweetById = async (tweet_Id) => {
    try {
        const tweet = await Tweet.findById(tweet_Id);
        return tweet;
    }
    catch (error) {
        throw error;
    }
};

export const updateTweet = async (tweet_Id, body) => {
    try {
        // const tweet = await Tweet.findByIdAndUpdate(tweet_Id, { tweet: body });
        //This function is weird,
        //It updates the tweet but returns the old tweet

        const tweet = await Tweet.findByIdAndUpdate(tweet_Id, { tweet: body }, { new: true });
        // returns the updated tweet
        return tweet;
    }
    catch (error) {
        throw error;
    }
}



export const deleteTweet = async (tweet_Id) => {
    try {
        const tweet = await Tweet.findByIdAndDelete(tweet_Id);
        return tweet;
    }
    catch (error) {
        throw {
            message: 'Tweet not found',
            success: false
        }
    }
}