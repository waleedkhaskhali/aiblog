// routes/blogPosts.js
import express from "express";
import AiPost from "../models/AiPost.js";
const router = express.Router();

// Get all blog posts
router.get("/", async (req, res) => {
  try {
    const aiPosts = await AiPost.find();
    res.json(aiPosts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific blog post
router.get("/:id", getAiPost, (req, res) => {
  res.json(res.aiPost);
});

// Create a blog post
router.post("/", async (req, res) => {
  const aiPost = new AiPost({
    context: req.body.context,
    formality: req.body.formality,
    keywords: req.body.keywords,
    max_tokens: req.body.max_tokens,
    model: req.body.model,
    n: req.body.n,
    source_lang: req.body.source_lang,
    target_lang: req.body.target_lang,
    temperature: req.body.temperature,
    title: req.body.title,
    ai_Text: req.body.ai_Text,
  });

  try {
    const newAiPost = await aiPost.save();
    res.status(201).json(newAiPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Middleware function to get a specific blog post by ID
async function getAiPost(req, res, next) {
  let aiPost;
  try {
    aiPost = await AiPost.findById(req.params.id);
    if (aiPost == null) {
      return res.status(404).json({ message: "Blog post not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.aiPost = aiPost;
  next();
}

export default router;
