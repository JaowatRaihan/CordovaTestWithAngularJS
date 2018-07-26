
angular.module('App').config(function ($routeProvider) {
$routeProvider
    .when('/home', {
        templateUrl: 'partials/pages/home.html',
        controller: 'ContactController'
    })
    .when('/another-page', {
        templateUrl: 'partials/pages/another-page.html',
        controller: 'ContactController'
    })
    .when('/contact', {
        templateUrl: 'partials/pages/contact.html',
        controller: 'ContactController'
    })
    .otherwise({
        redirectTo: '/home'
    });
});