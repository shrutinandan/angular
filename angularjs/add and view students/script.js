
 mainApp.controller('AddStudentController', function($scope,$rootScope) {

    $scope.addText = function() {
        $rootScope.arrayText.push({rollno:$scope.rollno,fname:$scope.fname,age:$scope.age});	
		
    }

 });		
   mainApp.controller('ViewStudentsController', function($scope) {
    });