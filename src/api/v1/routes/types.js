const express = require("express");
const router = express.Router();

const typesController = require("../controllers/add/types");

router.post("/", typesController);

module.exports = router;
