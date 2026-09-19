const Service = require("../models/Service");

const createSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const getServices = async (req, res) => {
  try {
    const services = await Service.find({
      status: "active",
    }).sort({ createdAt: -1 });

    res.json(services);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch services.",
    });
  }
};

const getServiceBySlug = async (req, res) => {
  try {
    const service = await Service.findOne({
      slug: req.params.slug,
      status: "active",
    });

    if (!service) {
      return res.status(404).json({
        message: "Service not found.",
      });
    }

    res.json(service);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch service.",
    });
  }
};

const createService = async (req, res) => {
  try {
    const {
      title,
      description,
      content,
      image,
      status,
    } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Title and description are required.",
      });
    }

    let slug = createSlug(title);

    const existingSlug = await Service.findOne({ slug });

    if (existingSlug) {
      slug = `${slug}-${Date.now()}`;
    }

    const service = await Service.create({
      title,
      slug,
      description,
      content: content || "",
      image: image || "",
      status: status || "active",
    });

    res.status(201).json({
      message: "Service created successfully.",
      service,
    });
  } catch (error) {
    console.error("Create service error:", error);

    res.status(500).json({
      message: "Failed to create service.",
    });
  }
};

const updateService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        message: "Service not found.",
      });
    }

    const {
      title,
      description,
      content,
      image,
      status,
    } = req.body;

    if (title) {
      service.title = title;
      service.slug = createSlug(title);
    }

    if (description !== undefined) {
      service.description = description;
    }

    if (content !== undefined) {
      service.content = content;
    }

    if (image !== undefined) {
      service.image = image;
    }

    if (status !== undefined) {
      service.status = status;
    }

    await service.save();

    res.json({
      message: "Service updated successfully.",
      service,
    });
  } catch (error) {
    console.error("Update service error:", error);

    res.status(500).json({
      message: "Failed to update service.",
    });
  }
};

const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        message: "Service not found.",
      });
    }

    await service.deleteOne();

    res.json({
      message: "Service deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete service.",
    });
  }
};

module.exports = {
  getServices,
  getServiceBySlug,
  createService,
  updateService,
  deleteService,
};