const mongoose = require("mongoose");

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

module.exports = mongoose.model("Comment", commentSchema)