module.exports = new function() {
  var conn = require('./config'); // conn จะกลายเป็นคลาสที่สร้าง instance object แล้ว แล้วก็เป็นชื่อว่า database

  this.listHeader = function(callbackError, callbackSuccess) {
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
  this.getHeader = function(header_id) {

  }
  this.saveHeader = function(user_id, title, content) {

  }
  this.getReply = function(header_id) {

  }
  this.saveReply = function(user_id, header_id, content) {

  }
}
