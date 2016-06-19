miniSocial.controller("webboardListController", function($scope,dbSvc){
  $scope.title="Hello Wabboard."
  $scope.topic=[];
  $scope.listTopic = function(){
    dbSvc.request("/message","feed", {}).then(function(result) {
      console.log(result);
      $scope.topic = result;
    });
  };

});
