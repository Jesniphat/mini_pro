var express = require("express");
var router = express.Router();

/* Index of message file. */
router.get("/", function(req, res, next) {
  // res.send("Index ของ File Message.");
  res.send("Message controller");
});

////////////////////////////////////////////////////////////////////////////////
router.get("/feed", function(req, res, next) {
  res.send("Webboard Header List");
});

////////////////////////////////////////////////////////////////////////////////
router.get("/topic/:id", function(req, res, next) {
  console.log("topic id = ", req.params.id);
  var id = req.params.id;
  res.send("ID : " + id);
});
////////////////////////////////////////////////////////////////////////////////
router.get("/reply/:id", function(req, res, next) {
  console.log("reply id = ", req.params.id);
  var id = req.params.id;
  res.send("ID : " + id);
});
////////////////////////////////////////////////////////////////////////////////
router.post("/save", function(req, res, next) {
  console.log("save = ", req.query);
  res.send("Save Success");
});
////////////////////////////////////////////////////////////////////////////////
router.post("/reply", function(req, res, next) {
  console.log("reply = ", req.query);
  res.send("Save Success");
});

module.exports = router;
