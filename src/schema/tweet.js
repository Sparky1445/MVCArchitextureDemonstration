import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    tweet: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 140,
        trim: true
    },
    tweetImage: {
        type: String,
        default: null
    },

},
    {
        timestamps: true
    }



);

const Tweet = mongoose.model('Tweet', tweetSchema); // Tweet is the name of the collection(set of records/documents)

export default Tweet;