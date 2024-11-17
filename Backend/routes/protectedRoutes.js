const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Admin route
router.get("/admin", authMiddleware, roleMiddleware(["Admin"]), (req, res) => {
  res.send("Welcome Admin");
});

// Police route
router.get(
  "/police",
  authMiddleware,
  roleMiddleware(["Police"]),
  (req, res) => {
    res.send("Welcome Police");
  }
);

// Company route
router.get(
  "/company",
  authMiddleware,
  roleMiddleware(["Company"]),
  (req, res) => {
    res.send("Welcome Company");
  }
);

// Driver route
router.get(
  "/driver",
  authMiddleware,
  roleMiddleware(["Driver"]),
  (req, res) => {
    res.send("Welcome Driver");
  }
);

module.exports = router;
