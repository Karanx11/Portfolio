const express = require("express");
const router = express.Router();
const Skill = require("../models/Skill");
const verifyToken = require("../middleware/authMiddleware");

// ADD Skill
router.post("/", verifyToken, async (req, res) => {
  try {
    const newSkill = new Skill(req.body);
    const savedSkill = await newSkill.save();
    res.status(201).json(savedSkill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET All Skills
router.get("/", verifyToken, async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE Skill
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ message: "Skill deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
