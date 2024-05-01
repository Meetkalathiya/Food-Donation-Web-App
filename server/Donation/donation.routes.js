const express = require('express');
const router = express.Router();
const donationController = require('./donation.controller');

// Create a new donation
router.post("/", donationController.createDonation);

// Get donation by ID
router.get("/:donationId", donationController.getDonationById);
router.get("/", donationController.getAllDonations);

// Delete donation by ID
router.delete("/:donationId", donationController.deleteDonationById);

// Update donation by ID
router.put("/:donationId", donationController.updateDonationById);

module.exports = router;
