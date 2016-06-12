var db = angular.module('db', []);
db.service('dbSvc', ['$rootScope', '$window', '$q', '$filter', '$http',
  function($rootScope, $window, $q, $filter, $http){
    var request = function(post_url,action, param) {
      var deferred = $q.defer();
      var url = post_url;
      $http.post(url + '/' + action, param).then(function(response) {
        deferred.resolve(response.data);
      }, function() {
        deferred.reject(false);
      });
      return deferred.promise;
    }
    this.request = request;
}]);
