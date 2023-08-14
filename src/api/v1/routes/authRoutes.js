const express = require("express");
const router = express.Router();
const login = require("../../../../auth/login");

// Route: /api/auth/login
router.post("/", login);

module.exports = router;
