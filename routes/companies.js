var express = require('express');
var Company = require('../controller/Company');
var router = express.Router();

/* GET users listing. */
router.post('/add',Company.saveCompany);

module.exports = router;