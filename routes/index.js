var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send({
    name:'XXX',
    age:'27',
    address:'Chennai',
  })
});

module.exports = router;
