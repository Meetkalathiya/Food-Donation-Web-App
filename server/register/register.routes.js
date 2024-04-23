const express = require('express');
const router = express.Router();
const userController = require('./register.controller');

// Register a new user
router.post("/", userController.registerUser);

// Get user by ID
router.get("/:userId", userController.getUserById);
router.get("/", userController.getAllUsers);

// Delete user by ID
router.delete("/:userId", userController.deleteUserById);

// Update user by ID
router.put("/:userId", userController.updateUserById);

module.exports = router;
