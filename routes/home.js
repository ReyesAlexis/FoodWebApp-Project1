var express = require('express');
var router = express.Router();
var db = require("diskdb");

// HELPER FUNCTION CHECKS IF USER IS ALREADY LOGGED IN
function checkSignIn(req, res, next) {
    if(req.session.user) {
        next();
    }
    else {  
        res.redirect('../users/login');
    }
}

/* GET home page. */
router.get('/', checkSignIn, function(req, res) {
    db.connect('./data', ['users']);
    user = req.session.user; // the logged in user
    res.render('home', { title: 'Home' , name: user.fname + " " + user.lname});
});

module.exports = router;