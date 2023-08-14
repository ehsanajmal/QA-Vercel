const express = require("express");
const router = express.Router();

const typesController = require("../controllers/add/types");

router.post("/", typesController.handler);
router.get("/getAll", typesController.getAllTypes);

module.exports = router;
