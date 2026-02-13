const express = require("express");
const router = express.Router();
const Home = require("../models/Home");
const multer = require("multer");
const verifyToken = require("../middleware/authMiddleware");

const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

/* =========================
   SINGLE CLOUDINARY STORAGE
========================= */
const storage = new CloudinaryStorage({
  cloudinary,
  params: (req, file) => {
    // Profile Image
    if (file.fieldname === "profileImage") {
      return {
        folder: "portfolio/profile",
        allowed_formats: ["jpg", "jpeg", "png", "webp"],
      };
    }

    // Resume PDF
    if (file.fieldname === "resume") {
      return {
        folder: "portfolio/resume",
        resource_type: "raw",
        allowed_formats: ["pdf"],
      };
    }
  },
});

const upload = multer({ storage });

/* =========================
   CREATE / UPDATE HOME
========================= */
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

        profileImage: req.files?.profileImage
          ? req.files.profileImage[0].path
          : home?.profileImage,

        resume: req.files?.resume
          ? req.files.resume[0].path
          : home?.resume,
      };

      if (home) {
        const updated = await Home.findOneAndUpdate(
          {},
          updatedData,
          { returnDocument: "after" }
        );
        return res.json(updated);
      }

      const newHome = new Home(updatedData);
      const savedHome = await newHome.save();
      res.status(201).json(savedHome);

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
);

/* =========================
   GET HOME (PUBLIC)
========================= */
router.get("/", async (req, res) => {
  try {
    const home = await Home.findOne();
    res.json(home);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
