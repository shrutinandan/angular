var app = angular.module('store',[]);
console.log("in app.js"); 
  
app.controller('AppController',['$scope','MyService', function ($scope,MyService) {
console.log('service data', MyService)
  $scope.data=MyService;
  //console.log('in controller main', $scope.data.abc[0])
}]);

 app.directive('customDirectiveone', function () {
 console.log("in directive");
     return {
         restrict: 'E',
         template: '<div class="row" style="background-color: yellow"><div class="col-md-12" style="border:2px solid black" >questions 1: {{abcA.questions}} </BR><input type="text" name="name" value="enter">{{abcA.answer}}</div></div>',
		scope: {
            abcA: '='
         },
         controller: 'MyController'
		 
     };
 });
app.controller('MyController', function ($scope) {
    console.log("in second controller of d1", $scope.abcA);
	});

 app.directive('customDirectivetwo', function () {
 console.log("in2 directive");
     return {
         restrict: 'E',
         template: '<div class="row" style="background-color: pink"><div class="col-md-8" style="border:2px solid black,background-color: yellow;" > questions2: {{abcD.questions}} </br><div ng-repeat="apps in abcD.options"><input ng-model="apps" type="checkbox" value="{{apps}}" name="{{apps}}" ng-checked="selection.indexOf(apps) > -1"/>{{apps}}</div>', 
		 // <label ng-repeat="apps in data.abc[1]"> <input type="checkbox" name="selectedValues[]" value="{{apps.answer}}" ng-checked="selection.indexOf(apps) > -1"  ng-click="toggleSelection(apps)"> {{apps}}</label></div>',
			
		scope: {
            abcD: '='
         },
		 
         controller: 'MyController1'
     };
 });
app.controller('MyController1', function ($scope) {
    console.log("in second controller of d2", $scope.abcD);
	console.log("in second controller of d2", $scope.abcD.answer);
	  $scope.toggleSelection = function toggleSelection(apps) {
    var idx = $scope.selection.indexOf(apps);

    // is currently selected
    if (idx > -1) {
      $scope.selection.splice(idx, 1);
    }

    // is newly selected
    else {
      $scope.selection.push(apps);
    }
  };
	});
	 app.directive('customDirectivethree', function () {
 console.log("in3 directive");
     return {
         restrict: 'E',
         template: '<div class="row" style="background-color: yellow"><div class="col-md-12" style="border:2px solid black" > questions3: {{abcE.questions}} </br><div class="dropdown"><button class="dropdown-toggle" type="button" data-toggle="dropdown">select:</button><ul class="dropdown dropdown-menu"><li href="#">HTML</li><li>CSS</li><li>JavaScript</li></ul></div></div></div>',
		scope: {
            abcE: '='
         },
         controller: 'MyController3'
     };
 });
 app.controller('MyController3', function ($scope) {
    console.log("in second controller of d3", $scope.abcE);
	
	});
  app.directive('customDirectivefour', function () {
 console.log("in4 directive");
     return {
         restrict: 'E',
         template: '<div class="row" style="background-color: yellow"><div class="col-md-12" style="border:2px solid black" >questions 4: {{abcF.questions}} </BR><input type="radio" name="gender" value="male">{{abcF.answer}}</div></div>',
		scope: {
            abcF: '='
         },
         controller: 'MyController4'
		 
     };
 });
app.controller('MyController4', function ($scope) {
    console.log("in second controller of d4", $scope.abcF);
	});

app.service('MyService', function () {
  
   return{
   abc:
   [{
  "questions" :"what is your name?",
  "type" :"Single Text ",
     "answer" :"shruti"
	   
    }, 
	
	{

      "questions" :"what are your favorite color?",
	  "type":", Multiple Choice ",
	   "answer" :['red','green'],
	    "options" :['red', 'green', 'blue', 'pink'],


	  
    }, 
	{
   "questions" :"select your places you visit:",
	  "type":"or Multiple Choice with dropdown",
	   "answer" :['pune','delhi'],
	   "options" :['tamil nadu','pune','delhi','mumbai']
     
    },
	{
	"questions" :"what is your gender?",
  "type" :"Single Text with radio ",
     "answer" :"female"
	
	},
	
	
	]}; 
});























