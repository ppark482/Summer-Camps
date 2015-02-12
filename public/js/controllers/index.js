angular.module('mean.system').controller('IndexController', ['$scope', 'Global', 'parallaxHelper', 
	function ($scope, Global, parallaxHelper) {
    $scope.global = Global;

    $scope.title = "Welcome to The Palm Beach Post's Summer Camp and Birthday Party Planning Directory";
    

    console.log('after parallax window');
}]);