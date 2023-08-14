const express = require("express");
const router = express.Router();

const categoriesController = require("../controllers/add/categories");

router.post("/", categoriesController);

module.exports = router;
