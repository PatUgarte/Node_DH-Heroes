const express = require("express");
const router = express.Router();
const mainController = require("../controller/mainController.js");

router.get("/", mainController.homePage);
router.get("/creditos", mainController.creditos);
router.get("*", mainController.error);

module.exports = router;