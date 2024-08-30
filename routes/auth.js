// routes/auth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
  // Handle user registration
});

router.post("/login", async (req, res) => {
  // Handle user login
});

module.exports = router;
