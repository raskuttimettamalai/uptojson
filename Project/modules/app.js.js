	var app=angular.module('myapp',["ngRoute","aboutus","project","qualification"]);
app.config(function($routeProvider){
      $routeProvider
          .when("/about",{
                templateUrl: "./aboutus/aboutus.html"
          })
          .when("/acaproject",{
                templateUrl: "./acaproject/acaproject.html"
          })

          .when("/qualification"
          {
            templateUrl:"./qualification/qualification.html"
          })
          .when("/contacts"
          {
            templateUrl:"./contacts/contacts.html"
          });  
          
  .otherwise({"redirectTo":/'index'})

  $locationprovider.html5mode(true);

app.controller("nav",function($scope)

   {
    $scope.navbar=[
{
        address:'/aboutus',
        name:'index'
},
{
  address:'/project',
  name:'project'
}
{
  address:'/qualification',
  name:'qualification'
}
{
  address:'/contacts',
  name:'contacts'
}
    ]
   }

   });
