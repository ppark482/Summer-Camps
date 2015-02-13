angular.module('mean.system')
	.controller('IndexController', ['$scope', 'Global', 'parallaxHelper', '$location', 
		function ($scope, Global, parallaxHelper, $location) {
	    $scope.global = Global;

	    $scope.amSummerCamp = function () {
	    	// route to summer camp info page
	    	$location.path('/summercampinfo');
	    };

	    $scope.amPartyPlanner = function () {
	    	// route to party planner info page
	    	$location.path('/partyplannerinfo');
	    };

	    $scope.searchCamps = function (query) {
	    	// query returns object with user choices, keyword and zipcode
	    	// to query database for results

	    };
		}
	]); // end of IndexController