//Setting up route
angular.module('summerCamps').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/summercampinfo', {
            templateUrl: 'views/summercampinfo.html'
        }).
        when('/partyplannerinfo', {
            templateUrl: 'views/partyplannerinfo.html'
        }).
        when('/', {
            templateUrl: 'views/index.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('summerCamps').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);
