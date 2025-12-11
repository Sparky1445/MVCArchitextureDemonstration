import mongoose from 'mongoose';

export const getTweetByIdValidator = (req, res, next) => {

    const isValid = mongoose.Types.ObjectId.isValid(req.params.tweet_Id);

    if (!isValid) {
        return res.status(400).json({
            success: false,
            message: 'Invalid tweet Id'
        });
    }
    next();
};