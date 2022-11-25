import express from "express";
import cors from "cors";
import * as dotenv from 'dotenv'
dotenv.config()

const PORT = 8000;

const allowedOrigin = process.env.CLIENT_PATH || 'http://localhost:3000';
const serverPath = process.env.SERVER_PATH || 'http://localhost:8000';

const app = express();

app.use(cors({
    origin: allowedOrigin,
    method: ['GET', 'POST']
}))

app.use(express.static('public'));
app.use("/images", express.static('assets/images'));

app.listen(PORT, () => console.log("\x1b[33m%s\x1b[0m", `Application Started on ${serverPath}`));