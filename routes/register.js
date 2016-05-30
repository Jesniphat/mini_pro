var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render("register.html");
});

router.post('/save', function(req, res, next) {
  console.log(req.body);
  res.send("Save success");
});

module.exports = router;
