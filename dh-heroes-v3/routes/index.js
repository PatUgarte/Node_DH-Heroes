const express = require('express');
const router = express.Router();
let indexController = require("../controllers/indexController.js");

/* GET home page. */
router.get('/',indexController.homePage);
router.get('/creditos',indexController.creditos);

module.exports = router;