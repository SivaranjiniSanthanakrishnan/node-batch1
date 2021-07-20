var express = require('express');
var router = express.Router();
var UserModule = require('../modules/UserModule')

/* GET home page. */

router.get('/getdata', UserModule.getData);
router.post('/savedata', UserModule.saveData);
router.put('/updatedata/:id', UserModule.updateData)
router.delete('/deletedata/:id', UserModule.deleteData)

module.exports = router;
