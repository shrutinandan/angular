var app = angular.module('store',[]);
console.log("in app.js");
// app.controller("myCtrl", function($scope) {
  // $scope.myObj = {
    // "color" : "white",
    // "background-color" : "coral",
    // "font-size" : "60px",
    // "padding" : "50px"
  // }
  
  
  app.controller('AppController',['$scope','MyService', function ($scope,MyService) {

  $scope.data=MyService.sayHello();
  console.log($scope.data.length);
	console.log($scope.data[0].rating);
  console.log('data',MyService.sayHello()); 
  console.log('data',MyService.sayHello().rating); 
  for(var i=0;i<$scope.data.length;i++)
  {
     if($scope.data[i].rating.value >0)
	 
     {
	
	 console.log($scope.data[i].rating.value);
	  console.log($scope.data[i].rating.color)
         $scope[$scope.data[i]] =[];
         for(var j=0;j< $scope.data[i].rating.value;j++)
         { 
		 console.log($scope.data[i].rating.value);
		 		 console.log($scope.data[i].rating.color);
		 
            $scope[$scope.data[i]].push({value: '*', color : 'coral'}); 
			console.log($scope[$scope.data[i]]);
         }
         $scope.data[i].rating =$scope[$scope.data[i]];
		
     }
  }


}]);


app.service('MyService', function () {
  this.sayHello = function () {
   return[{
   "design":"*",
      "dashboard": "Beach resort  sentiment anaylsis for social media",
	  "val":"=",
      "modified": "7/12/2015 3.27",
      "author": "you",
      "status": "#",
      "views": 28,
      "rating":{"value":3,"color" : "coral"},  
	   "values":27,
	   
    }, 
	{
	"design":"*",
         "dashboard": "Beach resort  sentiment anaylsis for social media",
		  "val":"=",
      "modified": "7/12/2015 3.27",
      "author": "you",
      "status": "#",
      "views": 28,
      "rating": {"value":5,"color" : "coral"},   
	  "values":17,
     
    }, 
	{
	"design":"*",
      "dashboard": "Beach resort  sentiment anaylsis for social media",
      "modified": "7/12/2015 3.27",
      "author": "you",
      "status": "#",
      "views": 28,
      "rating": {"value":4,"color" : "coral"}, 
"values":37,	  
     
    },
	{
	"design":"*",
      "dashboard": "Beach resort  sentiment anaylsis for social media",
      "modified": "7/12/2015 3.27",
      "author": "you",
      "status": "#",
      "views": 28,
      "rating": {"value":2,"color" : "coral"},   
	  "values":57,
     
    }
	];
	
	  
   
  };
  // });
});
