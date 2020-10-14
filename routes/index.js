var express = require('express');
var router = express.Router();

/* GET start page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "Food Wars"}); // renders the html (.jade) page
});

module.exports = router;
