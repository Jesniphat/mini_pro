module.exports = new function() {
  var conn = require('./config'); // conn จะกลายเป็นคลาสที่สร้าง instance object แล้ว แล้วก็เป็นชื่อว่า database
  this.createLogin = function(loginname, paeeword, displayname, callbackok, callbackerror) {
    var db = conn.init();
    var ifok = function(){
      var sql = "insert into member (loginname, password, displayname) ";
              + "values ('" + loginname + "', '" + password + "', '" + displayname + "')";
      db.query(sql, function(err, rows, fields){
        if(err){
          console.log("err : ", err);
          callbackerror(err.error);
        } else if (rows.length == 0) {
          callbackerror("Error Create new Login.");
        } else {
          callbackok(rows.insertId);
        }
      });
    }
    var ifError = function(message) {
      callbackerror(message);
    }
    var ifDuplicate = function() {
      callbackerror("Login นี้ไม่ส่มารถใช้งานได้")ว
    }
    this.checkLoginDuplicate(loginname, ifox, ifDuplicate, ifError);
  }
}
