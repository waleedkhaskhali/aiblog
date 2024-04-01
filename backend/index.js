import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import posts from "./routes/posts.js";
import aiposts from "./routes/aiposts.js";
import bodyParser from "body-parser";

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/post", posts);
app.use("/api/aipost", aiposts);

connectDB();

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
