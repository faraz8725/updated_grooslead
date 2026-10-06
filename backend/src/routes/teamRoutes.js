const express = require("express");

const {
  getTeamMembers,
  getAllTeamMembers,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} = require("../controllers/teamController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.get("/", getTeamMembers);

router.get(
  "/admin/all",
  protect,
  adminOnly,
  getAllTeamMembers
);

router.post(
  "/",
  protect,
  adminOnly,
  upload.single("image"),
  createTeamMember
);

router.put(
  "/:id",
  protect,
  adminOnly,
  upload.single("image"),
  updateTeamMember
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteTeamMember
);

module.exports = router;