var app = angular.module('personal1',[]);

app.controller('meController', function($scope) {
    $scope.datitos = {};
    
    $scope.submitForm = funcion (datitos) {
        alert('' + JSON.stringify(datitos));
    };
});