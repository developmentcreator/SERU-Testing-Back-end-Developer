// src/models/VehicleYear.js
const mongoose = require("mongoose");

const VehicleYearSchema = new mongoose.Schema({
  year: { type: Number, required: true },
});

const VehicleYear = mongoose.model("VehicleYear", VehicleYearSchema);
module.exports = VehicleYear;
