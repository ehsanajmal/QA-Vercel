const express = require("express");
const router = express.Router();

const answerController = require("../controllers/add/answer");

router.post("/", answerController);

module.exports = router;
