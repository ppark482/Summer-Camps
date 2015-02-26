(function(){
	
	angular.module('camp.system')
	    .controller('HeaderController', ['$scope', 'Global', 
	        function ($scope, Global) {
	            $scope.global = Global;

	}]);

}()); // end iife