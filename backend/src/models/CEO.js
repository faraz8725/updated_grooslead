const mongoose = require("mongoose");

const ceoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    designation: {
      type: String,
      default: "CEO & Founder",
      trim: true,
    },

    thoughtTitle: {
      type: String,
      default: "",
      trim: true,
    },

    messageOne: {
      type: String,
      default: "",
      trim: true,
    },

    messageTwo: {
      type: String,
      default: "",
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    imageFileId: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CEO", ceoSchema);