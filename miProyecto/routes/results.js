var express = require('express');
var router = express.Router();
const controller = require('../controllers/resultsController');

/* GET home page. */
router.get('/', controller.index);

module.exports = router;