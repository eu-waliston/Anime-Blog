const express = require("express");
const {
  getAllPosts,
  getAnPost,
  createAPost,
  updatePost,
  deletePost,
} = require("../Controller/Post.Controller");

const PostRouter = express.Router();


PostRouter.get("/blog/post", getAllPosts);
PostRouter.get("/blog/post/:id", getAnPost);
PostRouter.post("/blog/post", createAPost);
PostRouter.put("/blog/post/:id", updatePost);
PostRouter.delete("/blog/post/:id", deletePost);

module.exports = PostRouter;
