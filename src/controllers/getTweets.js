import {
    createTweet as createTweetService, getTweets as getTweetsService,
    getTweetById as getTweetByIdService,
    deleteTweet as deleteTweetService,
    updateTweet as updateTweetService
} from '../services/tweetServices.js';

import { errorResponse, successResponse } from '../Utils/responses.js';
import { StatusCodes } from 'http-status-codes';

export const getTweets = async (req, res) => {
    try {
        const tweets = await getTweetsService();
        console.log(tweets);
        return successResponse(StatusCodes.OK, tweets, "Tweets retrieved successfully", res);
    } catch (error) {
        return errorResponse(error, res);
    }

};

export const getTweetById = async (req, res) => {
    try {
        const tweet = await getTweetByIdService(req.params.tweet_Id);
        return successResponse(StatusCodes.OK, tweet, 'Tweet by Id fetched successfully!', res);
    } catch (error) {
        return errorResponse(error, res);
    }

};

export const createTweet = async (req, res) => {
    try {
        const response = await createTweetService({
            body: req.body.tweet,
            image: req.file?.location
        })


        return successResponse(StatusCodes.CREATED, response, "Tweet created successfully", res);
    }
    catch (error) {
        return errorResponse(error, res);
    }
};

export const updateTweet = async (req, res) => {
    try {
        const tweet = await updateTweetService(req.params.tweet_Id, req.body.tweet);
        return successResponse(StatusCodes.OK, tweet, "Tweet updated successfully", res);
    }
    catch (error) {
        return errorResponse(error, res);
    }
}

export const deleteTweet = async (req, res) => {
    try {
        const tweet = await deleteTweetService(req.params.tweet_Id);
        return successResponse(StatusCodes.OK, tweet, "Tweet deleted successfully", res);
    }
    catch (error) {
        return errorResponse(error, res);
    }
}