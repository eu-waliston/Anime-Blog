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
UserRouter.post("/blog/user", createUser);
UserRouter.put("/blog/user/:id", updateUser);
UserRouter.delete("/blog/user/:id", deleteUser);

module.exports = UserRouter;
