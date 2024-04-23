const userService = require("./register.service");

// Register a new user
exports.registerUser = async (req, res) => {
  const { name, email, password, confirmPassword, userType } = req.body;

  // Check if required fields are empty
  if (!name || !email || !password || !confirmPassword || !userType) {
    return res.status(400).json({ message: "Required fields are empty" });
  }

  // Check if password and confirm password match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    // Check if the email is already registered
    const existingUser = await userService.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    // Create a new user
    const newUser = await userService.createUser({
      name,
      email,
      password,
      userType,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        userType: newUser.userType,
      },
    });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error("Error getting user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete user by ID
exports.deleteUserById = async (req, res) => {
  const userId = req.params.userId;

  try {
    const deletedUser = await userService.deleteUserById(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update user by ID
exports.updateUserById = async (req, res) => {
  const userId = req.params.userId;
  const updatedUserData = req.body;

  try {
    const updatedUser = await userService.updateUserById(userId, updatedUserData);
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error("Error getting all users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};