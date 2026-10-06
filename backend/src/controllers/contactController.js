const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      message: "Message sent successfully.",
      contact,
    });
  } catch (error) {
    console.error("Create contact error:", error);

    res.status(500).json({
      message: "Failed to send message.",
    });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.json(contacts);
  } catch (error) {
    console.error("Get contacts error:", error);

    res.status(500).json({
      message: "Failed to fetch contact messages.",
    });
  }
};

const updateContactStatus = async (req, res) => {
  try {
    const contact = await Contact.findById(
      req.params.id
    );

    if (!contact) {
      return res.status(404).json({
        message: "Message not found.",
      });
    }

    contact.status =
      contact.status === "read"
        ? "unread"
        : "read";

    await contact.save();

    res.json({
      message: "Message status updated.",
      contact,
    });
  } catch (error) {
    console.error("Update contact error:", error);

    res.status(500).json({
      message: "Failed to update message.",
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(
      req.params.id
    );

    if (!contact) {
      return res.status(404).json({
        message: "Message not found.",
      });
    }

    await contact.deleteOne();

    res.json({
      message: "Message deleted successfully.",
    });
  } catch (error) {
    console.error("Delete contact error:", error);

    res.status(500).json({
      message: "Failed to delete message.",
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  updateContactStatus,
  deleteContact,
};