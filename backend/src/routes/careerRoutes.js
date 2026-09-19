const express = require("express");

const {
  getCareers,
  getCareerById,
  createCareer,
  updateCareer,
  deleteCareer,
} = require("../controllers/careerController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getCareers);

router.get("/:id", getCareerById);

router.post("/", protect, adminOnly, createCareer);

router.put("/:id", protect, adminOnly, updateCareer);

router.delete("/:id", protect, adminOnly, deleteCareer);

module.exports = router;