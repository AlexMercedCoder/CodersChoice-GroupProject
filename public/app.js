const ng = angular.module('MyApp', []);

ng.controller('MainCtrl', [ '$http', function($http){

controller = this;

    this.getAnimals = () => {

        $http({
            method:'GET',
            url: '/animalsapi',
        }).then(function(response){
            console.log(response);
            controller.animalArray = [response.data];
            console.log(controller.animalArray);
        }, function(){
            console.log('error');
        });


    }


    this.createAnimal = () => {
        $http({
            method:'POST',
            url: '/animalsapi',
            data: {
              name: controller.animalName,
              species: controller.animalSpecies,
              breed: controller.animalBreed,
              sex: controller.animalSex,
              image: controller.animalImage,
              age: controller.animalAge,
              adopted: false
            }
        }).then(function(response){
            console.log(response);
            controller.getAnimals();
        }, function(){
            console.log('error');
        });
    }


    this.deleteAnimal = function(animal){
    $http({
        method:'DELETE',
        url: '/animalsapi/' + animal._id
    }).then(
        function(response){
            controller.getAnimals();
        },
        function(error){

        }
    );
}

    this.editAnimal = function(animal){
        $http({
        method:'PUT',
        url: '/animalsapi/' + animal._id,
        data: {
            name: controller.updatedAnimalName,
            species: controller.updatedAnimalSpecies,
            breed: controller.updatedAnimalBreed,
            sex: controller.updatedAnimalSex,
            image: controller.updatedAnimalImage,
            age: controller.updatedAnimalAge
        }
    }).then(
        function(response){
            controller.getAnimals();
        },
        function(error){

        }
    );
}


}]);


// ng.controller('MainCtrl', function(){
//
// });
