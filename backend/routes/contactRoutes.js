const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const Message = require("../models/Message");


// CREATE or UPDATE Contact Info (Single)
router.post("/info", async (req, res) => {
  try {
    let contact = await Contact.findOne();

    if (contact) {
      contact = await Contact.findOneAndUpdate({}, req.body, { new: true });
      return res.json(contact);
    }

    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET Contact Info
router.get("/info", async (req, res) => {
  try {
    const contact = await Contact.findOne();
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// SEND Message
router.post("/message", async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    const savedMessage = await newMessage.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// GET All Messages (Admin)
router.get("/message", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE Message
router.delete("/message/:id", async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.json({ message: "Message deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
