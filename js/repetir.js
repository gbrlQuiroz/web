(function () {
    var app = angular.module('persona', []);

    app.factory('RESTful', ['$http', function ($http) {
            var response = {};
            response.getDatos = function () {
                return $http.get('api/datos');
                 return $http.get('datos.json');
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
            return response;
        }]);



    app.controller('meController', ['$scope', 'RESTful', function ($scope, RESTful) {

            cargarDato(1);
            function cargarDato(id) {
                RESTful.getDato(id)
                        .success(function (datosCargados) {
                            //console.log("------- " + datosCargados);
                            $scope.datos = datosCargados;
                        });
            };

            $scope.salvar = function (datitos) {
                $scope.informa = 'entro al método SALVAR';
                //console.log('entro al método SALVAR');
                RESTful.postDatos(datitos)
                        .success(function (data, status) {
                            $scope.informa = 'se almacenó el registro';
                            //console.log('se almacenó el registro');

                        }).error(function (data, status) {
                    $scope.informa = 'falló la agregacion del registro';
                    //console.log('falló la agregación del registro');
                });
            };

            $scope.modificar = function (datitos) {
                $scope.informa = 'entro al mètodo MODIFICAR';
                console.log('entró al método MODIFICAR');
                RESTful.putDato(1, datitos) //++++++++cuidado!!!  estoy modificando el registro 1  fijo!!!!!++++++++++
                        .success(function (data, status) {
                            $scope.informa = 'se modificó registro';
                            console.log('se modificó registro');
                        }).error(function (data, status) {
                    $scope.informa = 'falló la modificación del registro';
                    console.log('fallo la modificación del registro');
                });

            };


        }]);

})();
