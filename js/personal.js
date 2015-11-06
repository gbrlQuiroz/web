(function () {
    var app = angular.module('personal', []);

    app.factory('RESTful', ['$http', function ($http) {
            var response = {};
            response.getDatos = function () {
                return $http.get('api/datos/1');
            };
            response.postDatos = function (datos) {
                return $http.post('', datos);
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
                $scope.informa = "entro al método salvar";
                //console.log('datitos.nombre:' + datitos.nombre);


            };
            $scope.informa = 'Sus datos han sido almacenados exitosamente!';
        #("miModal").show



        }]);

})();
