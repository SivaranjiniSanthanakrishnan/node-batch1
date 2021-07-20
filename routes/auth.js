var express = require('express');
var router = express.Router();
var Auth = require('../modules/RegisterModule')

router.get('/register', Auth.register);

module.exports = router;