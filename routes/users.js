var express = require('express');
var Users = require('../controller/Users');
var router = express.Router();

/* GET users listing. */
router.post('/add',Users.saveUsers);
router.post('/assign/company',Users.assignCompany);
router.get('/list',Users.getUsersList);

module.exports = router;
