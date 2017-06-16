var app = angular.module('examplehttpandcontroller',[]);

app.factory('myService', function($http){
  return {
    async: function(){
      return $http.get('test.json');
    }
  };  
});

app.controller('MainCtrl', function(myService,$scope){
  myService.async().then(function(d){
    $scope.data = d;
  })
})