const express = require("express");
const router = express.Router();
const heroesController = require("../controller/heroesController.js");

router.get("/", heroesController.jsoncito);
router.get("/detalle/:n", heroesController.detalle);
router.get("/bio/:n/:ok?", heroesController.bio);
router.get("*", heroesController.error);

module.exports = router;