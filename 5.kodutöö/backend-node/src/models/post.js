const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  id: { type: int, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: String, required: true },
  author: { type: String, required: true },
  changedby: { type: String, required: true }
});

const Post = model("Post", postSchema)

module.exports = Post