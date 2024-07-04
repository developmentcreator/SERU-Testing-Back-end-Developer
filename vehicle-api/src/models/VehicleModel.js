// src/models/VehicleModel.js
const mongoose = require("mongoose");

const VehicleModelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type_id: { type: mongoose.Schema.Types.ObjectId, ref: "VehicleType", required: true },
});

const VehicleModel = mongoose.model("VehicleModel", VehicleModelSchema);
module.exports = VehicleModel;
