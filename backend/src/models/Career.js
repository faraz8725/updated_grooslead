const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      default: "India",
      trim: true,
    },

    type: {
      type: String,
      default: "Full Time",
      trim: true,
    },

    experience: {
      type: String,
      default: "Fresher",
      trim: true,
    },

    status: {
      type: String,
      enum: ["open", "closed"],
      default: "open",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Career", careerSchema);