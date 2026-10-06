const express = require("express");

const {
  createContact,
  getContacts,
  updateContactStatus,
  deleteContact,
} = require("../controllers/contactController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", createContact);

router.get(
  "/admin",
  protect,
  adminOnly,
  getContacts
);

router.patch(
  "/admin/:id/status",
  protect,
  adminOnly,
  updateContactStatus
);

router.delete(
  "/admin/:id",
  protect,
  adminOnly,
  deleteContact
);

module.exports = router;