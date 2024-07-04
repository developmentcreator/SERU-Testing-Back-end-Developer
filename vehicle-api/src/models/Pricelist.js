// src/models/Pricelist.js
const mongoose = require("mongoose");

const PricelistSchema = new mongoose.Schema({
  code: { type: String, required: true },
  price: { type: Number, required: true },
  year_id: { type: mongoose.Schema.Types.ObjectId, ref: "VehicleYear", required: true },
  model_id: { type: mongoose.Schema.Types.ObjectId, ref: "VehicleModel", required: true },
});

const Pricelist = mongoose.model("Pricelist", PricelistSchema);
module.exports = Pricelist;
