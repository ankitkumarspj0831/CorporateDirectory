const express = require("express");

const router = express.Router();

const feedController = require("../controllers/feed");

router.get("/feed", feedController.getEmployees);

module.exports = router;