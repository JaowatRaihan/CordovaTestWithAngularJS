
angular.module('App').controller('ContactController', ['$scope', 'ContactService', function ($scope, contactService) {
    
    $scope.go_back = function() { 
        window.history.back();
    };

    contactService.get().then(function (data) {
        $scope.contactData = data;
    }, function (error) {
        console.log(error);
    });
 
}]);