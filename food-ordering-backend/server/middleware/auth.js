const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ success: false, message: "Access denied. No token provided." });
  }

  try {
    const verified = jwt.verify(token, "secretkey"); // Ensure the same secret key is used as in login
    req.user = verified; // Attach user data to request
    next(); // Continue to the next middleware or route
  } catch (err) {
    res.status(400).json({ success: false, message: "Invalid token" });
  }
};

module.exports = authMiddleware;
