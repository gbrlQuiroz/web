    (function () {
    var app = angular.module('agendar', []);

    app.factory('cargaFactory', ['$http', function ($http) {
        var datosFactory = {};
        datosFactory.getAudiencias = function () {
            return $http.get('../api/audiencias'); //en red
            //return $http.get('/api/audiencias'); //local
        };
        datosFactory.guardar = function (datos) {
            return $http.post('../api/audiencias', datos); // en red
            //return $http.post('/api/audiencias', datos); //local
        }

        return datosFactory;
    }]);

    app.controller('datosEntController', ['$scope', '$window', 'cargaFactory', function ($scope, $window, cargaFactory) {
        $scope.master = {};
        $scope.isDisabled = false;
        var url = 'http://' + window.location.host + '/audiencias/Views/menu.html';

        cargarDatos();
        function cargarDatos() {
            cargaFactory.getAudiencias()
            .success(function (datosCargados) {
                $scope.informa = 'El no. de Folio es: ' + (Object.keys(datosCargados).length + 1);
            });
        };

        $scope.salvar = function (datos) {
            $scope.informa = '... agendando la Audiencia...';
            $scope.isDisabled = true;
            cargaFactory.guardar(datos)
            .success(function (data, status) {
                alert('Se Agendo la Audiencia!');
                $scope.datos = angular.copy($scope.master);
                $window.location.href = url;
                $scope.informa = '';
            }).error(function (data, status) {
                alert('Error! --->' + status);
                $scope.isDisabled = false;
            });
        };
    }]);

})();

