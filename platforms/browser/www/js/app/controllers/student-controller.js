
angular.module('App').controller('ContactController', ['$scope', 'ContactService', function ($scope, contactService) {
    
    $scope.go_back = function() { 
        window.history.back();
    };

    contactService.get().then(function (data) {
        $scope.contactData = data;
    }, function (error) {
        console.log(error);
    });

    $scope.result = 
    [
      {
        courseName:"ENGLISH READING SKILLS & PUBLIC SPEAKING",
        courseCode:"01488",
        courseSection:"B3",
        status:"Valid",
        result:"A-",
        marks:"86.00"
      },
      {
        courseName:"DIFF CALCULUS AND COORDINATE GEOMETRY (MATHEMATICS 1) ",
        courseCode:"01489",
        courseSection:"B3",
        status:"Valid",
        result:"A+",
        marks:"99.00"
      },
      {
        courseName:"PHYSICS-1",
        courseCode:"01490",
        courseSection:"B3",
        status:"Valid",
        result:"A-",
        marks:"86.00"
      }
    ];
 
}]);