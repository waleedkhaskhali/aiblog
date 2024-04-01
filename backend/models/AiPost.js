import mongoose from "mongoose";

const AiPostSchema = new mongoose.Schema({
  context: {
    type: String,
    required: true,
  },
  formality: {
    type: String,
    default: "default",
  },
  keywords: {
    type: [String],
    required: true,
  },
  max_tokens: {
    type: Number,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  n: {
    type: Number,
    required: true,
  },
  source_lang: {
    type: String,
    required: true,
  },
  target_lang: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  ai_Text: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const AiPost = mongoose.model("AiPost", AiPostSchema);

export default AiPost;
