 var contactapp = angular.module('myapp', []);

    contactapp.controller('contacts',['$scope',function($scope)
     {
      $scope.submit=function(user){
      	alert("Name:"+user.Name+" "+"\nEmail:"+user.mail+"\nMessage:"+user.msg)
      }
    }]);