// src/models/VehicleBrand.js
const mongoose = require("mongoose");

const VehicleBrandSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const VehicleBrand = mongoose.model("VehicleBrand", VehicleBrandSchema);
module.exports = VehicleBrand;
