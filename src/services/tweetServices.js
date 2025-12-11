import { Filter } from 'bad-words';
import {
    createTweet as createTweetRepo, getTweets as getTweetsRepo,
    getTweetById as getTweetByIdRepo,
    deleteTweet as deleteTweetRepo,
    updateTweet as updateTweetRepo
} from '../repositories/tweetRepositories.js';

export const createTweet = async ({ body, image }) => {

    const filter = new Filter({ placeHolder: 'x' });

    if (filter.isProfane(body)) {

        console.log(filter.clean(body));
        throw new Error('Tweet contains bad words')
    }

    const tweet = await createTweetRepo({ body, image });
    return tweet;

}

export const getTweets = async () => {
    const tweets = await getTweetsRepo();
    return tweets;

}

export const getTweetById = async (tweet_Id) => {
    const tweet = await getTweetByIdRepo(tweet_Id);

    if (!tweet) {
        throw {
            message: 'Tweet not found',
            success: false
        }

    }
    return tweet;
}

export const updateTweet = async (tweet_Id, body) => {
    const tweet = await updateTweetRepo(tweet_Id, body);
    if (!tweet) {
        throw {
            message: 'Tweet not found ~Service',
            success: false
        }

    }
    return tweet;
}

export const deleteTweet = async (tweet_Id) => {
    const tweet = await deleteTweetRepo(tweet_Id);
    if (!tweet) {
        throw {
            message: 'Tweet not found ~Service',
            success: false
        }
    }
    return tweet;

}
