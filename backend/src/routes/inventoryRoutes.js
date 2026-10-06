const express = require("express");

const {
  getInventories,
  getAllInventories,
  createInventory,
  updateInventory,
  deleteInventory,
} = require("../controllers/inventoryController");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

/*
=========================================
PUBLIC
=========================================
*/

router.get("/", getInventories);

/*
=========================================
ADMIN
=========================================
*/

router.get(
  "/admin/all",
  protect,
  adminOnly,
  getAllInventories
);

router.post(
  "/",
  protect,
  adminOnly,
  upload.single("image"),
  createInventory
);

router.put(
  "/:id",
  protect,
  adminOnly,
  upload.single("image"),
  updateInventory
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteInventory
);

module.exports = router;