var app = angular.module('persona1',[]);

app.controller('myController', function($scope){
  $scope.datos = [
         {id:1,nombre:"Antonieta",fecNac:"06/06/1972",estatura:"1.60",peso:"55",titulo:"Lic.Informatica"},
         {id:2,nombre:"Jose",fecNac:"02/03/1979",estatura:"1.60",peso:"55",titulo:"Ing.Sistemas"},
         {id:3,nombre:"Miguel",fecNac:"07/07/1977",estatura:"1.75",peso:"68",titulo:"Ing.Industrial"},
         {id:4,nombre:"Mariana",fecNac:"20/08/1989",estatura:"1.60",peso:"58",titulo:"Lic.Derecho"},
         {id:5,nombre:"Diego",fecNac:"01/09/1985",estatura:"1.62",peso:"55",titulo:"Ing.Sistemas"},
         {id:6,nombre:"Camila",fecNac:"29/09/1968",estatura:"1.80",peso:"79",titulo:"Quimico"},
         {id:7,nombre:"Ernesto",fecNac:"02/10/1975",estatura:"1.85",peso:"82",titulo:"Quimico"}
    ];
});
