const User = require("../Model/User.Model");

async function getAllUsers(req, res) {
  try {
    let allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function getUser(req, res) {
  let id = req.params.id;
  try {
    let user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function createUser(req, res) {
  const newUser = new User({
    user_first_name: req.body.user_first_name,
    user_last_name: req.body.user_last_name,
    user_nasc_date: req.body.user_nasc_date,
    user_email: req.body.user_email,
    user_password: req.body.user_password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

async function updateUser(req, res) {
  let id = req.params.id;
  try {
    let updatedUser = await User.findByIdAndUpdate(id, {
      user_first_name: req.body.user_first_name,
      user_last_name: req.body.user_last_name,
      user_nasc_date: req.body.user_nasc_date,
      user_email: req.body.user_email,
      user_password: req.body.user_password,
    });

    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).josn({ message: error });
  }
}

async function deleteUser(req, res) {
  let id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.staus(200).json("User Successfully Delected!");
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
