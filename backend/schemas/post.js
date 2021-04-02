import mongoose from "mongoose";
import { post } from "../routers/instaRoute";

const { Schema } = mongoose;
const postSchema = new Schema({
  file : {
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
  comments:[ 
          {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
          }
  ],
}) 


const model = mongoose.model("Post", postSchema);

export default model;