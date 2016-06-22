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
  this.saveHeader = function(user_id, title, content, callbackok, callbackerror) {
    var db = conn.init();
    var $scope = {};

    var insertTopic = function(){
      var deferred = promise.pending();
      var sql = "INSERT INTO webboard_header(title, content, status, postby_member) "
              + "VALUES ('" + title + "', '" + content + "', 'A', " + user_id + ")";
      console.log("Sql = ", sql);

      db.query(sql, function(err, rows, fields){
        if(err){
          console.log("Insert error : ", err);
          deferred.reject(err.message);
        }else if (rows.length == 0) {
          deferred.reject("ไม่สามารถบันทึกข้อมูลได้");
        }else {
          $scope.topic_id = rows.insertId;
          deferred.resolve("Insert Ok");
        }
      });
      return deferred.promise;
    }

    insertTopic()
    .then(function() {
      console.log("Data from promise = ", arguments);
      callbackok($scope.topic_id);
    }).catch(function(e){
  	  console.log(e);
      callbackerror(e);
  	});
  }

//////////////  get reply method   /////////////////////////////////////////////
  this.getReply = function(header_id) {

  }

/////////////  save reply method   /////////////////////////////////////////////
  this.saveReply = function(user_id, header_id, content) {

  }

////////////////////////////////////////////////////////////////////////////////
} /* End module.exports here */
