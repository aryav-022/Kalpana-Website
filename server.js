import express from "express";
import cors from "cors";

const PORT = 8000;

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    method: ['GET', 'POST']
}))

app.use(express.static('public'));
app.use("/images", express.static('assets/images'));

// import mongoose from 'mongoose';
// mongoose.connect('mongodb://localhost:27017/team-kalpana', () => console.log("connected to mongodb"));

// import Blog from "./models/blog.js";

// app.get('/blogs', async (req, res) => {
//     const blogs = await Blog.find();
//     res.send(blogs);
// })

app.listen(PORT, () => console.log("\x1b[33m%s\x1b[0m", `Application Started on http://localhost:${PORT}`));