const Donation = require("../donation/donation.model");

exports.createDonation = async (donationData) => {
  try {
    const donation = new Donation(donationData);
    return await donation.save();
  } catch (error) {
    throw error;
  }
};

exports.getDonationById = async (donationId) => {
  try {
    return await Donation.findById(donationId);
  } catch (error) {
    throw error;
  }
};

exports.deleteDonationById = async (donationId) => {
  try {
    return await Donation.findByIdAndDelete(donationId);
  } catch (error) {
    throw error;
  }
};

exports.updateDonationById = async (donationId, updatedDonationData) => {
  try {
    return await Donation.findByIdAndUpdate(donationId, updatedDonationData, { new: true });
  } catch (error) {
    throw error;
  }
};

exports.getAllDonations = async () => {
  try {
    return await Donation.find();
  } catch (error) {
    throw error;
  }
};
