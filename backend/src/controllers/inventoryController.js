const Inventory = require("../models/Inventory");
const imagekit = require("../config/imagekit");

/*
=========================================
GET ALL ACTIVE INVENTORIES
=========================================
*/

const getInventories = async (req, res) => {
  try {
    const inventories = await Inventory.find({
      status: "active",
    }).sort({
      order: 1,
      createdAt: -1,
    });

    res.json(inventories);
  } catch (error) {
    console.error("Get inventories error:", error);

    res.status(500).json({
      message: "Failed to fetch inventories.",
    });
  }
};

/*
=========================================
GET ALL INVENTORIES FOR ADMIN
=========================================
*/

const getAllInventories = async (req, res) => {
  try {
    const inventories = await Inventory.find().sort({
      order: 1,
      createdAt: -1,
    });

    res.json(inventories);
  } catch (error) {
    console.error("Get all inventories error:", error);

    res.status(500).json({
      message: "Failed to fetch inventories.",
    });
  }
};

/*
=========================================
CREATE INVENTORY
=========================================
*/

const createInventory = async (req, res) => {
  try {
    const {
      name,
      category,
      url,
      status,
      order,
    } = req.body;

    if (!name || !category || !url) {
      return res.status(400).json({
        message: "Name, category and website URL are required.",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "Inventory image is required.",
      });
    }

    const uploadedImage = await imagekit.upload({
      file: req.file.buffer,
      fileName: `${Date.now()}-${req.file.originalname}`,
      folder: "/grosslead/inventory",
    });

    const inventory = await Inventory.create({
      name,
      category,
      url,
      image: uploadedImage.url,
      imageFileId: uploadedImage.fileId,
      status: status || "active",
      order: Number(order) || 0,
    });

    res.status(201).json({
      message: "Inventory created successfully.",
      inventory,
    });
  } catch (error) {
    console.error("Create inventory error:", error);

    res.status(500).json({
      message: "Failed to create inventory.",
    });
  }
};

/*
=========================================
UPDATE INVENTORY
=========================================
*/

const updateInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id);

    if (!inventory) {
      return res.status(404).json({
        message: "Inventory not found.",
      });
    }

    const {
      name,
      category,
      url,
      status,
      order,
    } = req.body;

    if (name !== undefined) {
      inventory.name = name;
    }

    if (category !== undefined) {
      inventory.category = category;
    }

    if (url !== undefined) {
      inventory.url = url;
    }

    if (status !== undefined) {
      inventory.status = status;
    }

    if (order !== undefined) {
      inventory.order = Number(order) || 0;
    }

    /*
    If a new image is selected,
    upload the new image to ImageKit.
    */

    if (req.file) {
      const uploadedImage = await imagekit.upload({
        file: req.file.buffer,
        fileName: `${Date.now()}-${req.file.originalname}`,
        folder: "/grosslead/inventory",
      });

      inventory.image = uploadedImage.url;
      inventory.imageFileId = uploadedImage.fileId;
    }

    await inventory.save();

    res.json({
      message: "Inventory updated successfully.",
      inventory,
    });
  } catch (error) {
    console.error("Update inventory error:", error);

    res.status(500).json({
      message: "Failed to update inventory.",
    });
  }
};

/*
=========================================
DELETE INVENTORY
=========================================
*/

const deleteInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id);

    if (!inventory) {
      return res.status(404).json({
        message: "Inventory not found.",
      });
    }

    /*
    Delete image from ImageKit if fileId exists.
    */

    if (inventory.imageFileId) {
      try {
        await imagekit.deleteFile(inventory.imageFileId);
      } catch (imageError) {
        console.error(
          "ImageKit delete error:",
          imageError.message
        );
      }
    }

    await inventory.deleteOne();

    res.json({
      message: "Inventory deleted successfully.",
    });
  } catch (error) {
    console.error("Delete inventory error:", error);

    res.status(500).json({
      message: "Failed to delete inventory.",
    });
  }
};

module.exports = {
  getInventories,
  getAllInventories,
  createInventory,
  updateInventory,
  deleteInventory,
};