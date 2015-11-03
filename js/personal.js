(function () {
    var app = angular.module('personal', []);

    app.factory('RESTful', ['$http', function ($http) {
            var response = {};
            response.getDatos = function () {
                return $http.get('api/datos/1'); //Obtiene un solo registro 
            };
            response.postDatos = function (datos) {
                return $http.post('api/datos', datos);
            };
            return response;
        }]);



    app.controller('meController', ['$scope', 'RESTful', function ($scope, RESTful) {

            cargarDatos();
            function cargarDatos() {
                RESTful.getDatos()
                        .success(function (datosCargados) {
                            //console.log("------- " + datosCargados);
                            $scope.datitos = datosCargados;
                        });

            }
            ;

            $scope.salvar = function (datitos) {
                $scope.informa = 'entro al método salvar';
                //console.log('entro al método salvar');
                RESTful.postDatos(datitos)
                        .success(function (data, status) {
                            $scope.informa = 'se almacenó el registro';
                            //console.log('se almacenó el registro');

                        }).error(function (data, status) {
                    $scope.informa = 'falló la agregacion del registro';
                    //console.log('falló la agregación del registro');
                });
            };
        }]);

})();
