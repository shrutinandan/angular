var app = angular.module('store',[]);
console.log("in app.js"); 
  
app.controller('AppController',['$scope','MyService', function ($scope,MyService) {
console.log('service data', MyService)
  $scope.data=MyService;
  console.log('in controller main', $scope.data)
}]);

// app.directive ('customDirective',function(){
    // return {
      // restrict:'E',
      // template:'<div class="row"><div class="col-md-8"  style="text:align:center;border-bottom: 1px solid lightgrey;" ><div class= "col-md-12" ><h4 style="color:blue;" >{{dataA.dashboard}} <span class="glyphicon glyphicon-share-alt" style="float:right;"></span></h4><p style="color:grey;"> {{dataA.author}} {{dataA.modified}} </p> <p style="color:grey;">views : {{dataA.views}} <span ng-repeat="day  in dataA.ratingValue track by $index" ng-style="day" class="glyphicon glyphicon-star" style="color:yellow;" > {{day.dataA.rating}}</span><span class = "glyphicon glyphicon-star-empty" style="float:right"></span><span class="glyphicon glyphicon-yen" style="float:right" ></span><span>{{dataA.values}}</span></p></div></div></div> </center>',
	  
	   // scope: {
                	// dataA: '='
                // }	,
	// controller: 'MyController'	   
    // };
  // });
   app.directive("myWidget", function () {
            return {
                restrict: "E",
        				scope: {
                	dataA: '='
                },
                template: "<div>{{dataA.name}} works in {{dataA.company}}",
                controller: function($scope){
                	console.log('in controller', $scope.dataA);
                }

            };
        });

app.controller('MyController',function($scope) {
console.log("in second controller", $scope.dataA);
//$scope.data[i].ratingV= $scope.data[i].ratingValue;
for( var i=0;i<$scope.data.length;i++)
  {
     if($scope.data[i].rating.value >0)
	 
     {
         $scope[$scope.data[i]] =[];
         for(var j=0;j< $scope.data[i].rating.value;j++)
         { 
		 
		 		 		 
            $scope[$scope.data[i]].push({value: '*', color : 'coral'}); 
			console.log('here',$scope[$scope.data[i]]);
         }
         $scope.data[i].ratingValue =$scope[$scope.data[i]];
		
     }
  }

});




app.service('MyService', function () {
  
   return{
   dataA:[{
   "design":"*",
      "dashboard": "Beach resort  sentiment anaylsis for social media  is  the values taken",
	  "val":"=",
      "modified": "7/12/2015 3.27",
      "author": "you",
      "status": "#",
      "views": 28,
      "rating":{"value":3,"color" : "coral"},  
	   "values":27,
	   "name": "Pranjal",
              "id": 1,
              "company": "Cybage"
	   
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
	]}; 
});
