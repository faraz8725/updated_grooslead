const express = require("express");

const {
  getCEO,
  createOrUpdateCEO,
} = require("../controllers/ceoController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.get("/", getCEO);

router.post(
  "/",
  protect,
  adminOnly,
  upload.single("image"),
  createOrUpdateCEO
);

module.exports = router;