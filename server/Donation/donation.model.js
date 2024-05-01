const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema(
  {
    contactNumber: {
      type: String,
      required: true,
    },
    foodDescription: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;
