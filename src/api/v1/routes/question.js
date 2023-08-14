const express = require("express");
const router = express.Router();

const questionController = require("../controllers/add/questions");

router.post("/", questionController.handler);
router.get("/getAll", questionController.getAllQuestions);

module.exports = router;
