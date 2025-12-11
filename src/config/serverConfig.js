import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the SAME folder
dotenv.config({
    path: path.join(__dirname, ".env"),
});

console.log("ENV PORT:", process.env.PORT);

export const PORT = process.env.PORT || 4000;

export const MONGODB_URL = process.env.MONGODB_URL
export const AWS_REGION = process.env.AWS_REGION
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY
export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME