var express = require('express');
var router = express.Router();
var db = require("diskdb");
//var path = require('path');
//var app = express();

//app.use(express.static(path.join(__dirname, 'public')));

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

/* GET leaderboard page. */
router.get('/leaderboard', checkSignIn, function(req, res) {
    db.connect('./data', ['users']);
    user = req.session.user; // the logged in user
    res.render('leaderboard', { title: 'Leaderboard' , name: user.fname + " " + user.lname});
});

/* get votes.json; the file path needs to be changed when running on different system */
router.get('/votes.json', checkSignIn, function (req, res) {
    db.connect('./data', ['votes']);
    //res.sendFile(db);
    res.sendFile('C:/Users/Haowen Yong/Desktop/fall 2020/cpsc349/projects/FoodWebApp-Project1/data/votes.json');
    // change above line to: res.sendFile('YourPathTo/votes.json');
});

/* GET about page. */
router.get('/about', checkSignIn, function(req, res) {
    db.connect('./data', ['users']);
    user = req.session.user; // the logged in user
    res.render('about', { title: 'About' , name: user.fname + " " + user.lname});
});

module.exports = router;