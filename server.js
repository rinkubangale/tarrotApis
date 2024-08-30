const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const logger = require("./utils/logger");
const { mongoURI, port } = require("./config/config");
const courseRoutes = require("./routes/userRoutes");

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/utils/home.html"));
});
// Routes
app.use("/api", courseRoutes);

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => logger.info("MongoDB connected"))
  .catch((err) => logger.error("MongoDB connection error:", err));

// Start server
app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
