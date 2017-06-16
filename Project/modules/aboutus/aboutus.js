var aboutapp=angular.module('myapp',[]);
aboutapp.config(function($routeProvider){
      $routeProvider
          .when('/about',{
                templateUrl: '/aboutus/aboutus.html'
              
          })

    });