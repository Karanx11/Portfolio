const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const multer = require("multer");
const path = require("path");

// Storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ADD Project
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const newProject = new Project({
      title: req.body.title,
      description: req.body.description,
      tech: req.body.tech,
      github: req.body.github,
      live: req.body.live,
      image: req.file ? `/uploads/${req.file.filename}` : "",
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET All Projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE Project
router.delete("/:id", async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
