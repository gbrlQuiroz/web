(function () {
    var app = angular.module('personal', []);

    

    app.controller('meController', ['$scope', function ($scope) {
        $scope.informa = 'Hola'; //esto es una variable de alcance goblal
        $scope.salvar = function (datitos){
            $scope.informa = "entro al método salvar";
        }
        
    }]);

})();
