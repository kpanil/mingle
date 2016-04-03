var express = require('express');
var router = express.Router();

// include respective controller
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
