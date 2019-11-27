const express = require('express');
const router = express.Router();
let heroesController = require("../controllers/heroesController.js");

/* GET users listing. */
router.get('/', heroesController.json);
router.get('/detalle/:n', heroesController.detalle);
router.get('/bio/:n/:ok?', heroesController.bio);


module.exports = router;