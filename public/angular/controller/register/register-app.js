var miniSocialRegister = angular.module("MiniSocial",['db']);
    miniSocialRegister.controller("RegisterContraller", function($scope,dbSvc){
      $scope.DisplayName = "Jes Test";
      $scope.LoginName = "";
      $scope.Password ="";
      $scope.ConfirmPassword = "";
      $scope.register = function(){
        console.log("function register");
      }
    });
