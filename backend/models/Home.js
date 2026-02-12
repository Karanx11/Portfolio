const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  profileImage: {
    type: String,
  },
  linkedin: String,
  github: String,
  email: String,
  resume: String, 
}, { timestamps: true });

module.exports = mongoose.model("Home", homeSchema);
