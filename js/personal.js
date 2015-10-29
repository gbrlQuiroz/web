(function () {
    var app = angular.module('personal', []);
    
    app.factory('RESTful',['$http', function ($http){
            var response = {};
            response.getDatos = function (){
                return $http.get('/api/datos');
            };
            response.postDatos = function (datos){
                return $http.post('',datos);
            };
            return response;
    }]);

    

    app.controller('meController', ['$scope', function ($scope) {
        $scope.informa = 'Hola'; 
        $scope.salvar = function (datitos){
            $scope.informa = "entro al método salvar";
            console.log('datitos' + datitos.nombre);
        };
        
    }]);

})();
