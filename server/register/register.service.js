const User = require("../register/register.model");
const bcrypt = require("bcrypt");

exports.createUser = async (userData) => {
  try {
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    const user = new User(userData);
    return await user.save();
  } catch (error) {
    throw error;
  }
};

exports.findUserByEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    throw error;
  }
};

exports.getUserById = async (userId) => {
  try {
    return await User.findById(userId);
  } catch (error) {
    throw error;
  }
};

exports.deleteUserById = async (userId) => {
  try {
    return await User.findByIdAndDelete(userId);
  } catch (error) {
    throw error;
  }
};

exports.updateUserById = async (userId, updatedUserData) => {
  try {
    return await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
  } catch (error) {
    throw error;
  }
};

exports.getAllUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    throw error;
  }
};
