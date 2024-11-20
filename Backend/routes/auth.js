const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// @route   POST api/auth/register
// @desc    Register new user
// @access  Public
router.post(
  "/register",
  [
    check("name", "Name is required").notEmpty(),
    check("email", "Include a valid email").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
    check("role", "Invalid role").isIn([
      "Admin",
      "Police",
      "Company",
      "Driver",
      "Maintenance"
    ]),
  ],
  async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract data
    const { name, email, password, role } = req.body;

    try {
      // Check if user exists
      let user = await User.findOne({ email });
      if (user)
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });

      // Create new user
      user = new User({ name, email, password, role });

      // Hash password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save user
      await user.save();

      // Return JWT
      const payload = { user: { id: user.id, role: user.role } };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   POST api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post(
  "/login",
  [
    check("email", "Include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract data
    const { email, password } = req.body;

    try {
      // Check for user
      let user = await User.findOne({ email });
      if (!user)
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });

      // Verify password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });

      // Return JWT
      const payload = { user: { id: user.id, role: user.role } };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;

//Exsisting Users
// 
//       {
//         name: 'Admin User',
//         email: 'admin@example.com',
//         password: 'password123',
//         role: 'Admin',
//       },
//       {
//         name: 'Police User',
//         email: 'police@example.com',
//         password: 'password123',
//         role: 'Police',
//       },
//       {
//         name: 'Company User',
//         email: 'company@example.com',
//         password: 'password123',
//         role: 'Company',
//       },
//       {
//         name: 'Driver User',
//         email: 'driver@example.com',
//         password: 'password123',
//         role: 'Driver',
//       },

