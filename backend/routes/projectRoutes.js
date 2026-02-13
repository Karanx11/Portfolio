const express = require("express");
const router = express.Router();
const Project = require("../models/Project");
const multer = require("multer");
const verifyToken = require("../middleware/authMiddleware");

const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

/* =========================
   CLOUDINARY STORAGE
========================= */

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "portfolio/projects",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

const upload = multer({ storage });

/* =========================
   ADD PROJECT (ADMIN)
========================= */
router.post("/", verifyToken, upload.single("image"), async (req, res) => {
  try {
    const newProject = new Project({
      title: req.body.title,
      description: req.body.description,
      tech: req.body.tech,
      github: req.body.github,
      live: req.body.live,
      image: req.file ? req.file.path : "", // ✅ Cloudinary URL
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =========================
   GET PROJECTS (PUBLIC)
========================= */
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =========================
   DELETE PROJECT (ADMIN)
========================= */
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    // delete image from cloudinary
    if (project?.image) {
      const publicId = project.image.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(
        `portfolio/projects/${publicId}`
      );
    }

    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
