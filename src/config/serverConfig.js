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
