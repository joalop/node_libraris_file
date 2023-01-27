const express = require('express');
const files = require('fs');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  
  res.render('index', { title: 'Express' });
});

module.exports = router;
