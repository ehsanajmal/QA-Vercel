const express = require("express");
const router = express.Router();

const questionController = require("../controllers/add/questions");

router.post("/", questionController);

module.exports = router;
