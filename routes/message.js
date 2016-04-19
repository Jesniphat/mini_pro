var express = require('express');
var router = express.Router();

/* Index of message file. */
router.get('/', function(req, res, next) {
  res.send('Index ของ File Message.');
});

/* New controller in message. */
router.get('/feed', function(req, res, next) {
  res.send('feed actions (new controller).');
});

module.exports = router;
