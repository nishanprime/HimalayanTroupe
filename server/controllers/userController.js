const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const ToDoList = require("../models/toDoListModel");
const { generateToken } = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, name, password } = req.body;
  const userExists =
    (await User.findOne({ email })) || (await User.findOne({ username }));
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const user = await User.create({ name, email, password, username });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
      token: generateToken(user._id),
    });
  }
  else{
      res.status(400)
      throw new Error("Invalid User Data")
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
});

//PRIVATE ROUTE
//ONLY LOGGED IN USER CAN VIEW
//AND CAN ONLY VIEW HIS/HER Todos
const mytodos = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    const mytodoList = await ToDoList.find({ user: user._id }).select("-user");
    console.log(mytodoList);
    res.json({
      name: user.name,
      email: user.email,
      username: user.username,
      todoLists: mytodoList,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

module.exports = { authUser, mytodos,registerUser };
