const Career = require("../models/Career");

const getCareers = async (req, res) => {
  try {
    const careers = await Career.find({
      status: "open",
    }).sort({ createdAt: -1 });

    res.json(careers);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch careers.",
    });
  }
};

const getCareerById = async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);

    if (!career) {
      return res.status(404).json({
        message: "Career not found.",
      });
    }

    res.json(career);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch career.",
    });
  }
};

const createCareer = async (req, res) => {
  try {
    const {
      title,
      description,
      location,
      type,
      experience,
      status,
    } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required.",
      });
    }

    const career = await Career.create({
      title,
      description,
      location: location || "India",
      type: type || "Full Time",
      experience: experience || "Fresher",
      status: status || "open",
    });

    res.status(201).json({
      message: "Career created successfully.",
      career,
    });
  } catch (error) {
    console.error("Create career error:", error);

    res.status(500).json({
      message: "Failed to create career.",
    });
  }
};

const updateCareer = async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);

    if (!career) {
      return res.status(404).json({
        message: "Career not found.",
      });
    }

    const {
      title,
      description,
      location,
      type,
      experience,
      status,
    } = req.body;

    if (title !== undefined) {
      career.title = title;
    }

    if (description !== undefined) {
      career.description = description;
    }

    if (location !== undefined) {
      career.location = location;
    }

    if (type !== undefined) {
      career.type = type;
    }

    if (experience !== undefined) {
      career.experience = experience;
    }

    if (status !== undefined) {
      career.status = status;
    }

    await career.save();

    res.json({
      message: "Career updated successfully.",
      career,
    });
  } catch (error) {
    console.error("Update career error:", error);

    res.status(500).json({
      message: "Failed to update career.",
    });
  }
};

const deleteCareer = async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);

    if (!career) {
      return res.status(404).json({
        message: "Career not found.",
      });
    }

    await career.deleteOne();

    res.json({
      message: "Career deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete career.",
    });
  }
};

module.exports = {
  getCareers,
  getCareerById,
  createCareer,
  updateCareer,
  deleteCareer,
};