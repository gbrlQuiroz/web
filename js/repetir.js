(function () {
    var app = angular.module('repetir', []);

    app.factory('RESTful', ['$http', function ($http) {
            var response = {};
            response.getDatos = function () {
                return $http.get('api/datos');
            };
            response.postDatos = function (datos) {
                return $http.post('api/datos', datos);
            };
            response.getDato = function (id) {
                var uri = 'api/datos/' + id;
                return $http.get(uri);
            };
            response.putDato = function (id, datos) {
                var uri = 'api/datos/' + id;
                return $http.put(uri, datos);
                //return $http.put(id,datos);
            };
            response.getRaro = function () {
                return $http.get('js/datos.json');
            };
            return response;
        }]);



    app.controller('meController', ['$scope', 'RESTful', function ($scope, RESTful) {

        /*+++++++++++++++++++++++
         * 
         ++++++++++++++++++++++*/
        cargarRaro();
        function cargarRaro() {
            RESTful.getRaro()
                    .success(function (datosCargados) {
                        console.log('------' + datosCargados);
                        $scope.datos = datosCargados;
                    });
        }
        ;
    }]);
})();
