const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const careerRoutes = require("./routes/careerRoutes");

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Grosslead Media API is running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/careers", careerRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

module.exports = app;