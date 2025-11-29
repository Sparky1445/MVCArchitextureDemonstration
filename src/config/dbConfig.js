import mongoose from 'mongoose';
import { MONGODB_URL } from './serverConfig.js';
export default async function connectDB() {

    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to DB");
    }
    catch (error) {
        console.log("Failed to Connect to DB");
        console.log(error);
    }
}
