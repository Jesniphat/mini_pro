var express = require("express");
var router = express.Router();

/* Index of message file. */
router.get("/", function(req, res, next) {
  // res.send("Index ของ File Message.");
  res.send("Message controller");
});

////////////////////////////////////////////////////////////////////////////////
router.post("/feed", function(req, res, next) {
  console.log("req = ", req.body);
  // res.send("Webboard Header List");
  var webboard_header = [];
  for(var i = 1; i <= 3; i++){
    webboard_header.push({id:1, title:"หัวข้อ webboard ที่ " + i, content: "เนื้อหา webboard ที่ " + i})
  }
  // console.log("webboard_header = ", webboard_header);
  res.json(webboard_header);
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
