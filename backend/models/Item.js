const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  image: {
  type: String
},

  category: {
    type: String,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  status: {
    type: String,
    enum: ["lost", "found", "claimed"],
    default: "lost",
    required: true
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  claimedBy: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User"
},

claimedAt: {
  type: Date
},

}, {
  timestamps: true
});

module.exports = mongoose.model("Item", itemSchema);