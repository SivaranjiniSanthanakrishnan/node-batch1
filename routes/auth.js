var express = require('express');
var router = express.Router();
var Auth = require('../modules/RegisterModule')

router.post('/register', Auth.register);
router.post('/login', Auth.login);

module.exports = router;