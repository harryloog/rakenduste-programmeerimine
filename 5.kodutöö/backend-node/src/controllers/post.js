const Post = require('../models/Post')

exports.getPosts = async (req, res) => {
  const posts = await Post.find({})
  
  res.status(200).send(posts)
}

exports.getPost = async (req, res) => {
  const { id } = req.params

  const post = await Post.findById(id)
  
  res.status(200).send(post)
}

exports.createPost = async (req, res) => {
  // Saaksite info kätta req.body -st

  const newPost = req.body

  const createdPost = new Post(newPost)

  const savedPost = await createdPost.save()

  res.status(200).send(`yay ${savedPost._id}`)
}

exports.updatePost = async (req, res) => {
  const { id } = req.params
  const createdPost = await Post.findById({ _id: id})
  createdPost = req.body;
  const savedPost = await createdPost.save()

  res.status(200).send(`updated ${savedPost._id}`)
}

exports.deletePost = async (req, res) => {
  const { id } = req.params

  const post = await Post.findOneAndDelete({ _id: id })

  if (!post) res.status(404).send("No post with that id found")

  res.status(200).send(`Successfully deleted the following post: \n ${post}`)
}