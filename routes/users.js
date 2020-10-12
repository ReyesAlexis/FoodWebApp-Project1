var express = require('express');
var router = express.Router();
var db = require("diskdb");

/* GET users */
router.get('/', function(req, res, next) {
  res.send('users');
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  db.connect('./data', ['users']);
  res.render('login', { title: 'Food Blog' , error: req.session.errors});
  delete req.session.errors;
});

/* POST login page */
router.post('/login', function(req, res, next) {
  db.connect('./data', ['users']);

  var email = req.body.email;
  var password = req.body.password;
  var record = db.users.findOne( { email: email } );
  if (record && record.password == password) {
      req.session.user = record;
      res.redirect('../home');
  }
  else {
      req.session.errors = "Invalid email/password";
      res.redirect('../users/login');
  }
});

/* GET sign up page. */
router.get('/signup', function(req, res, next) {
  db.connect('./data', ['users']);
  res.render('signup', { title: 'Food Blog', error: req.session.errors});
  delete req.session.errors;
});

/* POST sign up page */
router.post('/signup', function(req, res, next) {
  db.connect('./data', ['users']);

  // FORM INPUT --> JSON
  var user = {
      email: req.body.email,
      fname: req.body.fname,
      lname: req.body.lname,
      password: req.body.password,
  };

  // CHECK FOR EXISTING USER IN DB
  record = db.users.findOne({ email: user.email });
  if (record) {
      req.session.errors = "This email already exists.";
      res.redirect('../users/signup');
  }
  else {
      // TRY SAVING TO DB
      try {
          db.users.save(user);
          req.session.user = record;
          res.redirect('../home');
      }
      // DB SAVE ERROR
      catch (e) {
          console.log("API error" + e);
          res.sendStatus(500);
      }
  }
});

module.exports = router;

