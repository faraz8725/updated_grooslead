const Team = require("../models/Team");
const imagekit = require("../config/imagekit");

const getTeamMembers = async (req, res) => {
  try {
    const members = await Team.find({
      status: "active",
    }).sort({
      order: 1,
      createdAt: -1,
    });

    res.json(members);
  } catch (error) {
    console.error("Get team error:", error);

    res.status(500).json({
      message: "Failed to fetch team members.",
    });
  }
};

const getAllTeamMembers = async (req, res) => {
  try {
    const members = await Team.find().sort({
      order: 1,
      createdAt: -1,
    });

    res.json(members);
  } catch (error) {
    console.error("Get all team error:", error);

    res.status(500).json({
      message: "Failed to fetch team members.",
    });
  }
};

const createTeamMember = async (req, res) => {
  try {
    const {
      name,
      designation,
      description,
      order,
      status,
    } = req.body;

    if (!name || !designation) {
      return res.status(400).json({
        message: "Name and designation are required.",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "Team member photo is required.",
      });
    }

    const uploadedImage = await imagekit.upload({
      file: req.file.buffer,
      fileName: `${Date.now()}-${req.file.originalname}`,
      folder: "/grosslead/team",
    });

    const member = await Team.create({
      name,
      designation,
      description: description || "",
      image: uploadedImage.url,
      imageFileId: uploadedImage.fileId,
      order: Number(order) || 0,
      status: status || "active",
    });

    res.status(201).json({
      message: "Team member created successfully.",
      member,
    });
  } catch (error) {
    console.error("Create team member error:", error);

    res.status(500).json({
      message: "Failed to create team member.",
    });
  }
};

const updateTeamMember = async (req, res) => {
  try {
    const member = await Team.findById(req.params.id);

    if (!member) {
      return res.status(404).json({
        message: "Team member not found.",
      });
    }

    const {
      name,
      designation,
      description,
      order,
      status,
    } = req.body;

    if (name !== undefined) member.name = name;
    if (designation !== undefined) member.designation = designation;
    if (description !== undefined) member.description = description;
    if (order !== undefined) member.order = Number(order) || 0;
    if (status !== undefined) member.status = status;

    if (req.file) {
      const uploadedImage = await imagekit.upload({
        file: req.file.buffer,
        fileName: `${Date.now()}-${req.file.originalname}`,
        folder: "/grosslead/team",
      });

      if (member.imageFileId) {
        try {
          await imagekit.deleteFile(member.imageFileId);
        } catch (error) {
          console.error("Old team image delete error:", error.message);
        }
      }

      member.image = uploadedImage.url;
      member.imageFileId = uploadedImage.fileId;
    }

    await member.save();

    res.json({
      message: "Team member updated successfully.",
      member,
    });
  } catch (error) {
    console.error("Update team member error:", error);

    res.status(500).json({
      message: "Failed to update team member.",
    });
  }
};

const deleteTeamMember = async (req, res) => {
  try {
    const member = await Team.findById(req.params.id);

    if (!member) {
      return res.status(404).json({
        message: "Team member not found.",
      });
    }

    if (member.imageFileId) {
      try {
        await imagekit.deleteFile(member.imageFileId);
      } catch (error) {
        console.error("Team image delete error:", error.message);
      }
    }

    await member.deleteOne();

    res.json({
      message: "Team member deleted successfully.",
    });
  } catch (error) {
    console.error("Delete team member error:", error);

    res.status(500).json({
      message: "Failed to delete team member.",
    });
  }
};

module.exports = {
  getTeamMembers,
  getAllTeamMembers,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
};