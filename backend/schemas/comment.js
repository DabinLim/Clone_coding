import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    required: true,
  }
})

const model = mongoose.model("Comment", commentSchema);
export default model;