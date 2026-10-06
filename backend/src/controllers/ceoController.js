const CEO = require("../models/CEO");
const imagekit = require("../config/imagekit");

const getCEO = async (req, res) => {
  try {
    const ceo = await CEO.findOne().sort({
      createdAt: -1,
    });

    if (!ceo) {
      return res.status(404).json({
        message: "CEO information not found.",
      });
    }

    res.json(ceo);
  } catch (error) {
    console.error("Get CEO error:", error);

    res.status(500).json({
      message: "Failed to fetch CEO information.",
    });
  }
};

const createOrUpdateCEO = async (req, res) => {
  try {
    const {
      name,
      designation,
      thoughtTitle,
      messageOne,
      messageTwo,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "CEO name is required.",
      });
    }

    let ceo = await CEO.findOne();

    if (!ceo && !req.file) {
      return res.status(400).json({
        message: "CEO photo is required.",
      });
    }

    if (!ceo) {
      const uploadedImage = await imagekit.upload({
        file: req.file.buffer,
        fileName: `${Date.now()}-${req.file.originalname}`,
        folder: "/grosslead/ceo",
      });

      ceo = await CEO.create({
        name,
        designation: designation || "CEO & Founder",
        thoughtTitle: thoughtTitle || "",
        messageOne: messageOne || "",
        messageTwo: messageTwo || "",
        image: uploadedImage.url,
        imageFileId: uploadedImage.fileId,
      });
    } else {
      ceo.name = name;
      ceo.designation =
        designation || "CEO & Founder";
      ceo.thoughtTitle = thoughtTitle || "";
      ceo.messageOne = messageOne || "";
      ceo.messageTwo = messageTwo || "";

      if (req.file) {
        const uploadedImage = await imagekit.upload({
          file: req.file.buffer,
          fileName: `${Date.now()}-${req.file.originalname}`,
          folder: "/grosslead/ceo",
        });

        if (ceo.imageFileId) {
          try {
            await imagekit.deleteFile(ceo.imageFileId);
          } catch (error) {
            console.error(
              "Old CEO image delete error:",
              error.message
            );
          }
        }

        ceo.image = uploadedImage.url;
        ceo.imageFileId = uploadedImage.fileId;
      }

      await ceo.save();
    }

    res.json({
      message: "CEO information saved successfully.",
      ceo,
    });
  } catch (error) {
    console.error("CEO save error:", error);

    res.status(500).json({
      message: "Failed to save CEO information.",
    });
  }
};

module.exports = {
  getCEO,
  createOrUpdateCEO,
};