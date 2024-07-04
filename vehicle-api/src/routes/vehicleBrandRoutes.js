// src/routes/vehicleBrandRoutes.js
const express = require("express");
const { getAllVehicleBrands, getVehicleBrandById, createVehicleBrand, updateVehicleBrand, deleteVehicleBrand } = require("../controllers/vehicleBrandController");
const { auth, adminAuth } = require("../middlewares/auth");

const router = express.Router();

router.get("/vehicle-brands", auth, getAllVehicleBrands);
router.get("/vehicle-brands/:id", auth, getVehicleBrandById);
router.post("/vehicle-brands", auth, adminAuth, createVehicleBrand);
router.patch("/vehicle-brands/:id", auth, adminAuth, updateVehicleBrand);
router.delete("/vehicle-brands/:id", auth, adminAuth, deleteVehicleBrand);

module.exports = router;
