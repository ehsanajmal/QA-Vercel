const express = require("express");
const router = express.Router();

const categoriesController = require("../controllers/add/categories");

router.post("/", categoriesController.handler);
router.get("/getAll", categoriesController.getAllCategories);

module.exports = router;
