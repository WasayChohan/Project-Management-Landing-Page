// ==============================
// Import Mongoose
// ==============================
const mongoose = require("mongoose");

// ==============================
// Project Schema
// ==============================
const projectSchema = new mongoose.Schema(
  {
    // Project Title
    title: {
      type: String,
      required: true,
      trim: true,
    },

    // Project Description
    description: {
      type: String,
      default: "",
    },

    // Project Status
    status: {
      type: String,
      enum: ["Planning", "In Progress", "Completed"],
      default: "Planning",
    },

    // Project Owner
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// ==============================
// Export Project Model
// ==============================
module.exports = mongoose.model("Project", projectSchema);
