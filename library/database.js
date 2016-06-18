module.exports = new function() {
  this.listHeader = function(callbackError, callbackSuccess) {
    var db = database.init(); //เรียก method init จาก class database
    var sql = "SELECT * FROM webboard_header WHERE status = 'A'";
    db.query(sql, function(err, rows, fields){
      if(err){
        console.log("error listHeader");
        console.log("err : ", err);
        callbackError("Error!!");
      }else {
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
