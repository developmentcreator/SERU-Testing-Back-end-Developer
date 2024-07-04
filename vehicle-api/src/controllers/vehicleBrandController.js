// src/controllers/vehicleBrandController.js
const VehicleBrand = require("../models/VehicleBrand");

const getAllVehicleBrands = async (req, res) => {
  try {
    const brands = await VehicleBrand.find();
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getVehicleBrandById = async (req, res) => {
  try {
    const brand = await VehicleBrand.findById(req.params.id);
    if (!brand) return res.status(404).send({ error: "Vehicle brand not found" });
    res.status(200).json(brand);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createVehicleBrand = async (req, res) => {
  try {
    const newBrand = new VehicleBrand(req.body);
    await newBrand.save();
    res.status(201).json(newBrand);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateVehicleBrand = async (req, res) => {
  try {
    const brand = await VehicleBrand.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!brand) return res.status(404).send({ error: "Vehicle brand not found" });
    res.status(200).json(brand);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteVehicleBrand = async (req, res) => {
  try {
    const brand = await VehicleBrand.findByIdAndDelete(req.params.id);
    if (!brand) return res.status(404).send({ error: "Vehicle brand not found" });
    res.status(200).send({ message: "Vehicle brand deleted" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getAllVehicleBrands, getVehicleBrandById, createVehicleBrand, updateVehicleBrand, deleteVehicleBrand };
