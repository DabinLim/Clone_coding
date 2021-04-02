const mongoose = require("mongoose");

// import { post } from "../routers/instaRoute";

const { Schema } = mongoose;
const postSchema = new Schema({
  file: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
})

module.exports = mongoose.model("Post", postSchema)