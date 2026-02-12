const express = require("express");
const router = express.Router();
const Home = require("../models/Home");
const multer = require("multer");
const path = require("path");
const verifyToken = require("../middleware/authMiddleware");

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


// CREATE or UPDATE Home (Single Document)
router.post(
  "/", 
  verifyToken,
  upload.fields([
    { name: "profileImage", maxCount: 1 },
    { name: "resume", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      let home = await Home.findOne();

      const updatedData = {
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
        linkedin: req.body.linkedin,
        github: req.body.github,
        email: req.body.email,

        // Profile Image
        profileImage: req.files?.profileImage
          ? `/uploads/${req.files.profileImage[0].filename}`
          : req.body.profileImage,

        // Resume File
        resume: req.files?.resume
          ? `/uploads/${req.files.resume[0].filename}`
          : req.body.resume,
      };

      if (home) {
        home = await Home.findOneAndUpdate({}, updatedData, {
          new: true,
        });
        return res.json(home);
      }

      const newHome = new Home(updatedData);
      const savedHome = await newHome.save();
      res.status(201).json(savedHome);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);


// GET Single Home Data
router.get("/", async (req, res) => {
  try {
    const home = await Home.findOne();
    res.json(home);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
