const express = require("express");
const {
  getAllPosts,
  getAnPost,
  createAPost,
  updatePost,
  deletePost,
} = require("../Controller/Post.Controller");

const PostRouter = express.Router();

/**
 * @api {get} /signin Singin
 * @apiGroup Sistema
 *
 * @apiSuccess {String} status Mensagem de acesso autorizado
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Logado!"
 *    }
 *
 */
PostRouter.get("/blog/post", getAllPosts);

/**
 * @api {post} /signup Signup
 * @apiGroup Sistema
 *
 * @apiSuccess {String} status Mensagem de cadastro efetuado
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Cadastrado!"
 *    }
 *
 */
PostRouter.get("/blog/post/:id", getAnPost);
PostRouter.post("/blog/post", createAPost);
PostRouter.put("/blog/post/:id", updatePost);
PostRouter.delete("/blog/post/:id", deletePost);

module.exports = PostRouter;
