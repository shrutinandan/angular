var app = angular.module('store',[]);
console.log("in app.js");
  
  
  app.controller('AppController',['$scope','MyService', function ($scope,MyService) {
	console.log('service data', MyService)
  $scope.data=MyService;
  
 // console.log('data',MyService.sayHello());
  
  
  $scope.removeItem = function(index){
   $scope.data.selectedUsers.push(angular.copy($scope.data.allUsers[index])) ;
		//	angular.copy($scope.data.allUsers[index],$scope.data.selectedUsers[index])
			$scope.data.allUsers.splice(index,1);
			//console.log("first to second",$scope.data.allUsers.splice(index,1));
		}
		
		
  $scope.addItem = function(index) {
			$scope.data.allUsers.push( angular.copy($scope.data.selectedUsers[index]));
		//	angular.copy($scope.data.allUsers[index],$scope.data.selectedUsers[index])
			$scope.data.selectedUsers.splice(index,1);
			//console.log("second to first",$scope.data.selectedUsers.splice(index,1));
		
		 }


}]);


app.service('MyService', function () {
  
   return{
   
   allUsers: [{
  
      "userId": "1shrutin",
	  "firstName":"shruti",
      "lastName": "nandan",
      "email": "sh@gmail.com",
      
	   
    }, 
	{
	 "userId": "2shradhan",
	  "firstName":"shruti",
      "lastName": "nandan",
      "email": "sh@gmail.com",
     
    }, 
	{
	 "userId": "3priyag",
	  "firstName":"priyag",
      "lastName": "nandan",
      "email": "sh@gmail.com",	  
     
    },
	{
	 "userId": "4nourinb",
	  "firstName":"nourinb",
      "lastName": "nandan",
      "email": "sh@gmail.com",
     
    },
	{
	 "userId": "5shailja",
	  "firstName":"shailja",
      "lastName": "nandan",
      "email": "sh@gmail.com",
	},
	{ "userId":"6siddharth",
	  "firstName":"siddharth",
      "lastName": "nandan",
      "email": "sh@gmail.com",
	},
	{
	 "userId": "7yogesh",
	  "firstName":"shruti",
      "lastName": "nandan",
      "email": "sh@gmail.com",
	},
	{ 
	"userId": "8abhishek",
	  "firstName":"shruti",
      "lastName": "nandan",
      "email": "sh@gmail.com",
	},
	{
	 "userId": "9raghav",
	  "firstName":"shruti",
      "lastName": "nandan",
      "email": "sh@gmail.com",
	}],
	selectedUsers: []
	
}	  
   
 
  
});





// function ShoppingCartCtrl($scope)  {
		// $scope.items = [
			// {Name: "Soap", Price: "25", Quantity: "10"},
			// {Name: "Shaving cream", Price: "50", Quantity: "15"},
			// {Name: "Shampoo", Price: "100", Quantity: "5"}
		// ];

		// $scope.addItem = function(item) {
			// $scope.items.push(item);
			// $scope.item = {};
		// }
    
		// $scope.totalPrice = function(){
			// var total = 0;
			// for(count=0;count<$scope.items.length;count++){
				// total += $scope.items[count].Price*$scope.items[count].Quantity;
			// }
			// return total;
		// }
		
		// $scope.removeItem = function(index){
			// $scope.items.splice(index,1);
		// }
	// }
