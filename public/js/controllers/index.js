angular.module('camp.system')
	.controller('IndexController', ['$scope', 'Global', '$location', 
		function ($scope, Global, $location) {
	    $scope.global = Global;

	    $scope.amSummerCamp = function () {
	    	// route to summer camp info page
	    	$location.path('/summercampinfo');
	    };

	    $scope.amPartyPlanner = function () {
	    	// route to party planner info page
	    	$location.path('/partyplannerinfo');
	    };

	    // Form: Dropdown box options
	    $scope.options = [
	    	{ label: 'Summer Camps', value: 'Summer Camps' },
	    	{ label: 'Party Planner', value: 'Party Planner' }
	    ];

	    $scope.selectedOption = $scope.options[0];

	    $scope.searchCamps = function (query) {
	    	// query returns object with keyword and zipcode
	    	// to query database for results
	    	console.log(query);
	    	// $scope.selectedOption.value is the user's choice in dropdown
	    	console.log($scope.selectedOption.value);

	    };
		}
	]); // end of IndexController