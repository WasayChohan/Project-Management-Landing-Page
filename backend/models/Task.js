// ==============================
// Import Mongoose
// ==============================
const mongoose = require("mongoose");

// ==============================
// Task Schema
// ==============================
const taskSchema = new mongoose.Schema(
  {
    // Task Title
    title: {
      type: String,
      required: true,
      trim: true,
    },

    // Task Description
    description: {
      type: String,
      default: "",
    },

    // Task Status
    status: {
      type: String,
      enum: ["To Do", "In Progress", "Done"],
      default: "To Do",
    },

    // Due Date
    dueDate: {
      type: Date,
    },

    // Task belongs to Project
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },

    // Task Owner
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
// Export Task Model
// ==============================
module.exports = mongoose.model("Task", taskSchema);
