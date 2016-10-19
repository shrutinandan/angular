var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/addStudent', {
      templateUrl: 'addStudent.html',
      controller: 'AddStudentController'
    }).
    when('/viewStudents', {
      templateUrl: 'viewStudents.html',
      controller: 'ViewStudentsController'
    }).
    otherwise({
      redirectTo: '/addStudent'
    });
  }
]);


mainApp.run(function($rootScope) {
    $rootScope.arrayText = [ {rollno: 1,fname: 'shruti',age: '23' },
							{rollno: 2,fname: 'shradha', age: '23' },
							{rollno: 3,fname: 'anshi', age: '3' },
							{rollno: 4,fname: 'shailja',age: '23' }];
});