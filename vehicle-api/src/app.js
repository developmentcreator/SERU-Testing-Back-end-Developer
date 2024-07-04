// src/app.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/config");
const vehicleBrandRoutes = require("./routes/vehicleBrandRoutes");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api", vehicleBrandRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
