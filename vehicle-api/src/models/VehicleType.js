// src/models/VehicleType.js
const mongoose = require("mongoose");

const VehicleTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand_id: { type: mongoose.Schema.Types.ObjectId, ref: "VehicleBrand", required: true },
});

const VehicleType = mongoose.model("VehicleType", VehicleTypeSchema);
module.exports = VehicleType;
