(function () {
    var app = angular.module('personal', []);

    

    app.controller('meController', ['$scope', function ($scope) {
        $scope.informa = 'Hola';
    }]);

})();
