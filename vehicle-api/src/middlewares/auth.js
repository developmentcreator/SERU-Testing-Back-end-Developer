// src/middlewares/auth.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) return res.status(401).send({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.id });
    if (!user) return res.status(404).send({ error: "User not found" });
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Invalid token" });
  }
};

const adminAuth = (req, res, next) => {
  if (!req.user.is_admin) {
    return res.status(403).send({ error: "Access denied" });
  }
  next();
};

module.exports = { auth, adminAuth };
