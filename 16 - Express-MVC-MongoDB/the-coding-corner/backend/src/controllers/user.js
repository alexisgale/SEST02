const User = require("../models/user"); // Correctly import the User model
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signupUser = async (request, response) => {
  const { username, password } = request.body;

  try {
    // Check if the username already exists
    const exists = await User.findOne({ username });
    if (exists) {
      return response.status(400).json({ error: "Username already in use." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    // Send a success response (excluding the password)
    response.status(201).json({
      message: "User created successfully!",
      user: {
        id: newUser._id,
        username: newUser.username,
      },
    });
  } catch (error) {
    // Handle any errors that occur during user creation
    response.status(500).json({ error: error.message });
  }
};

const loginUser = async (request, response) => {
  const { username, password } = request.body;
  try {
    const exists = await User.findOne({ username });
    if (!exists) {
      return response.status(404).json({ error: "Username not found." });
    }
    const isPasswordMatched = await bcrypt.compare(password, exists.password);
    if (!isPasswordMatched) {
      return response.status(400).json({ error: "Incorrect password." });
    }
    // payload - unique identifier
    // secret_key - this confidential key is stored inside of the server
    const token = jwt.sign({ userId: exists._id }, process.env.JWT_SECRET);
    response.status(200).json({ username, token });
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};
module.exports = {
  signupUser,
  loginUser,
};
