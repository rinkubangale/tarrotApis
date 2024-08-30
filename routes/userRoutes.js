const express = require("express");
const router = express.Router();
const User = require("../models/user");

// GET /api/user
router.get("/user", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// POST /api/user
router.post("/user", async (req, res) => {
  try {
    const { email, password, firstname, lastname, role } = req.body;
    const user = await User.find({ email: email });
    if (user.length > 0) {
      res.status(501).json({
        error: `User ${firstname} with the same email already present, try login!`,
      });
      return;
    }
    const newUser = { email, password, firstname, lastname, role };
    await User.create(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: "Bad Request" });
  }
});

module.exports = router;
