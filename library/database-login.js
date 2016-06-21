var promise     = require('bluebird');
var conn        = require('./config'); // conn จะกลายเป็นคลาสที่สร้าง instance object แล้ว แล้วก็เป็นชื่อว่า database

module.exports = new function() {

/////////////////////////////   Create Login Method   /////////////////////////////////////////
  this.createLogin = function(loginname, password, displayname, callbackok, callbackerror) {
    var db = conn.init(); //เรียก method init จาก class database
    var $scope = {};

    var checkLoginDuplicate = function(){
      var deferred = promise.pending();
      var sql = "select id from member where login_name = '" + loginname + "'";
      db.query(sql, function(err, rows, fields){
        if(err){
          deferred.reject(err.message);
        }else if (rows.length > 0) {
          console.log("rows = ", rows);
          deferred.reject("Duplicate Data Can't use this Login");
        }else {
          deferred.resolve("Can use this Login name.");
        }
      });
      return deferred.promise;
    }

    var insertLogin = function(){
      console.log("Arguments Duplicate = ",arguments);
      var deferred = promise.pending();

      var sql = "INSERT INTO member (login_name, password, display_name) "
              + "VALUES ('" + loginname + "', '" + password + "', '" + displayname + "')";

      db.query(sql, function(err, rows, fields){
        if(err){
          console.log(err);
          deferred.reject(err.message);
        }else if (rows == 0) {
          deferred.reject("Error create Login");
        }else {
          $scope.login_id = rows.insertId;
          deferred.resolve(rows.insertId);
        }
      });
      return deferred.promise;
    }

    checkLoginDuplicate()
    .then(insertLogin)
    .then(function() {
      console.log("from promise = ", arguments);
      callbackok($scope.login_id);
    }).catch(function(e){
  	  console.log(e);
      callbackerror(e);
  	});
  }

/////////////// checl login method  //////////////////////////////////////////////////
  this.checkLogin = function(login, pass, callbackok, callbackerror) {
    var db = conn.init();
    var $scope = {};

    var checkLoginPass = function(){
      var deferred = promise.pending();
      var sql = "SELECT * FROM member WHERE  login_name = '" + login
              + "' AND password = '" + pass + "' AND `status` = 'A'";

      db.query(sql, function(err, rows, fields){
        if(err){
          console.log("Login error : ", err);
          deferred.reject(err.message);
        }else if (rows.length == 0) {
          deferred.reject("Invalid login");
        }else {
          $scope.user_id = rows[0].id;
          deferred.resolve("Login Ok");
        }
      });
      return deferred.promise;
    }


    checkLoginPass()
    .then(function() {
      console.log("checkLogin from promise = ", arguments);
      callbackok($scope.user_id);
    }).catch(function(e){
  	  console.log(e);
      callbackerror(e);
  	});
  }


////////////////////////////////////////////////////////////////////////////////
} /* End module.exports here */
