const Post = require("../Model/Post.Model");

async function getAllPosts(req, res) {
  try {
    let allPosts = await Post.find();
    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function getAnPost(req, res) {
  let id = req.params.id;
  try {
    let post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function createAPost(req, res) {
  const newPost = new Post({
    post_title: req.body.post_title,
    post_content: req.body.post_content,
    post_author: req.body.post_author,
    post_date: req.body.post_date,
  });

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function updatePost(req, res) {
  const id = req.params.id;
  try {
    await Post.findByIdAndUpdate(id, {
      post_title: req.body.post_title,
      post_content: req.body.post_content,
      post_author: req.body.post_author,
      post_date: req.body.post_date,
    });

    let updatedPost = await Post.findById(id);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function deletePost(req, res) {
  let id = req.params.id;
  try {
    Post.findByIdAndDelete(id);
    res.status(200).json("User Successfully delected!");
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = {
  getAllPosts,
  getAnPost,
  createAPost,
  updatePost,
  deletePost,
};
