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
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to split dateTime into date and time
donationSchema.pre('save', function(next) {
  if (!this.isModified('dateTime')) {
    return next();
  }

  this.date = this.dateTime.toISOString().split('T')[0];
  this.time = this.dateTime.toTimeString().split(' ')[0];
  next();
});

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;
