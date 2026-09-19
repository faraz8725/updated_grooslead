const express = require("express");

const {
  getServices,
  getServiceBySlug,
  createService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getServices);

router.get("/:slug", getServiceBySlug);

router.post("/", protect, adminOnly, createService);

router.put("/:id", protect, adminOnly, updateService);

router.delete("/:id", protect, adminOnly, deleteService);

module.exports = router;