#$http service that returns a promise of a json file. 

We use a promise in the controller to assign the value to our $scope.data. The fields returned in the service are: 

1. Data
2. Status
3. Config
  3.1 transformRequest
  3.2 transformResponse
  3.3 method
  3.4 url
  3.5 headers

Based on this Plunk: http://plnkr.co/edit/cbdG5p?p=preview However I wanted to 
use version 1.2.5 of AngularJS, in fact we can see some differentes in the
returned JSON. 

##AngularJS 1.0.1

Data: {"data":["hello","world"],"status":200,"config":{"method":"GET","url":"test.json"}}

##AngularJS 1.2.5 

Data: {"data":["hello","world"],"status":200,"config":{"transformRequest":[null],"transformResponse":[null],"method":"GET","url":"test.json","headers":{"Accept":"application/json, text/plain, */*"}}}