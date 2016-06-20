var promise = require('bluebird');
var conn = require('./config'); // conn จะกลายเป็นคลาสที่สร้าง instance object แล้ว แล้วก็เป็นชื่อว่า database

module.exports = new function() {

///////////////  listHeader method  ////////////////////////////////////////////
  this.listHeader = function(callbackSuccess, callbackError) {
    var db = conn.init(); //เรียก method init จาก class database
    var sql = "SELECT * FROM webboard_header WHERE status = 'A'";
    db.query(sql, function(err, rows, fields){
      if(err){
        console.log("error listHeader");
        console.log("err : ", err);
        callbackError("Error!!");
      }else {
        // console.log("rows = ", rows, "fields = ", fields);
        var datas = [];
        for (var r in rows){
          var row_data = rows[r];
          datas.push({
            id: row_data.id,
            title: row_data.title
          });
        }
        callbackSuccess(datas);
      }
    });
    db.end();
  }

///////////////////  getheader method  /////////////////////////////////////////
  this.getHeader = function(header_id) {

  }

//////////////////  saveHeader method  /////////////////////////////////////////
  this.saveHeader = function(user_id, title, content) {

  }
  this.getReply = function(header_id) {

  }
  this.saveReply = function(user_id, header_id, content) {

  }
  
////////////////////////////////////////////////////////////////////////////////
} /* End module.exports here */
