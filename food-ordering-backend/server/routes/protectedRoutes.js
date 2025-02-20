const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

// A protected route (Only accessible if logged in)
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ success: true, message: "Welcome to your dashboard!", user: req.user });
});

module.exports = router;
