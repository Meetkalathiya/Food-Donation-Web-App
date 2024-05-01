const donationService = require("./donation.service");

// Create a new donation
exports.createDonation = async (req, res) => {
  const { contactNumber, foodDescription, address, dateTime } = req.body;

  // Check if required fields are empty
  if (!contactNumber || !foodDescription || !address || !dateTime) {
    return res.status(400).json({ message: "Required fields are empty" });
  }

  try {
    // Create the new donation
    const newDonation = await donationService.createDonation({
      contactNumber,
      foodDescription,
      address,
      dateTime,
    });

    res.status(201).json({
      message: "Donation created successfully",
      donation: {
        _id: newDonation._id,
        contactNumber: newDonation.contactNumber,
        foodDescription: newDonation.foodDescription,
        address: newDonation.address,
        dateTime: newDonation.dateTime,
      },
    });
  } catch (err) {
    console.error("Error creating donation:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get donation by ID
exports.getDonationById = async (req, res) => {
  const donationId = req.params.donationId;

  try {
    const donation = await donationService.getDonationById(donationId);
    if (!donation) {
      return res.status(404).json({ message: "Donation not found" });
    }
    res.status(200).json(donation);
  } catch (err) {
    console.error("Error getting donation:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete donation by ID
exports.deleteDonationById = async (req, res) => {
  const donationId = req.params.donationId;

  try {
    const deletedDonation = await donationService.deleteDonationById(donationId);
    if (!deletedDonation) {
      return res.status(404).json({ message: "Donation not found" });
    }
    res.status(200).json({ message: "Donation deleted successfully" });
  } catch (err) {
    console.error("Error deleting donation:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update donation by ID
exports.updateDonationById = async (req, res) => {
  const donationId = req.params.donationId;
  const updatedDonationData = req.body;

  try {
    const updatedDonation = await donationService.updateDonationById(donationId, updatedDonationData);
    if (!updatedDonation) {
      return res.status(404).json({ message: "Donation not found" });
    }
    res.status(200).json(updatedDonation);
  } catch (err) {
    console.error("Error updating donation:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all donations
exports.getAllDonations = async (req, res) => {
  try {
    const donations = await donationService.getAllDonations();
    res.status(200).json(donations);
  } catch (err) {
    console.error("Error getting all donations:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
