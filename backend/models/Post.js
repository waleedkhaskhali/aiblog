import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  tags: {
    type: [String],
  },
  comments: [
    {
      commenter: {
        type: String,
        required: true,
      },
      commentBody: {
        type: String,
        required: true,
      },
      commentDate: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

let Post = mongoose.model("post", PostSchema);

export default Post;
