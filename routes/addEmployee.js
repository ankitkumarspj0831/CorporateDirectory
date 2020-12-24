const express = require("express");

const router = express.Router();

const addEmployeeController = require("../controllers/addEmployee");

router.post("/add", addEmployeeController.addEmployee);

module.exports = router;
