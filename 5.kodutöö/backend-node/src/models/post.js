const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  title: { type: String, default: 'Title' },
  text: { type: String, default: 'post' },
  date: { type: String, default: Date.now() },
  author: { type: String, default: 'anonymous' },
  changedby: { type: String, default: 'not changed' },
});

const Post = model('Post', postSchema)

module.exports = Post