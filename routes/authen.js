var express = require('express');
var router = express.Router();

/******************************************************************************/
router.get('/', function(req, res, next) {
  res.send("authen controller");
});

////////////////////////////////////////////////////////////////////////////////
router.get('/login', function(req, res, next) {
  res.render("login.html");
});

////////////////////////////////////////////////////////////////////////////////
router.post('/login', function(req, res, next) {
  console.log("Post Login = ", req.body);
  res.send("Login Success");
});

////////////////////////////////////////////////////////////////////////////////
router.get('/logout', function(req, res, next) {
  console.log("Get Logout");
  res.redirect("/authen/login");
})

module.exports = router;
