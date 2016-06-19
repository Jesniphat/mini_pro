var miniSocialLogin = angular.module("MiniSocial",['db']);
  miniSocialLogin.controller("LoginController", function($scope,dbSvc){
    $scope.LoginName = "";
    $scope.Password = "";
    $scope.checkLogin = function(){
      console.log("checkLogin");
    }
});
