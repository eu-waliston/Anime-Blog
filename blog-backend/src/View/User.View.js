const express = require("express");
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../Controller/User.Controller");

const UserRouter = express.Router();

UserRouter.get("/blog/user", getAllUsers);
UserRouter.get("/blog/user/:id", getUser);
UserRouter.get("/blog/user", createUser);
UserRouter.get("/blog/user/:id", updateUser);
UserRouter.get("/blog/user/:id", deleteUser);

module.exports = UserRouter;
