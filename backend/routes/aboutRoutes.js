const express = require("express");
const router = express.Router();
const About = require("../models/About");
const verifyToken = require("../middleware/authMiddleware");

// CREATE or UPDATE (Single Document)
router.post("/", verifyToken, async (req, res) => {
  try {
    let about = await About.findOne();

    if (about) {
      about = await About.findOneAndUpdate({}, req.body, { new: true });
      return res.json(about);
    }

    const newAbout = new About(req.body);
    const savedAbout = await newAbout.save();
    res.status(201).json(savedAbout);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET
router.get("/", verifyToken, async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
