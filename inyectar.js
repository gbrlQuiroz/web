(function () {
    var app = angular.module('personal', ["ngResource"]);

      app.controller('meController', function ($scope,$http,dataResource){
           $http.get("js/datos.json").success(function(data){
               $scope.datos = data;
           });
               $scope.datosResource = dataResource.get();
            })
        
    
    app.factory("dataResource",function ($resource) {
     return $resource("js/datos.json",{get:{method:"GET", isArray:true}
                                      })
    })