<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
</head>
<body ng-app="myApp">
	<div ng-controller="Hello">
	
	<table border="1">
		<tr>
			<th>Category ID</th>                                                   
			<th>Category Name</th>                                                                     
		</tr>
		<tr ng-repeat="category in categories">                        
			<td>{{category.categoryId}}</td>                             
			<td>{{category.categoryName}}</td>                                      
		</tr>
	</table>
	
	
	<table border="1">
		<tr>
			<th>ID</th>
			<th>Password</th>
			<th>Role</th>
		</tr>
		<tr ng-repeat="user in users">
			<td>{{user.userId}}</td>
			<td>{{user.password}}</td>
			<td>{{user.role}}</td>
			
		</tr>
	</table>
	
	<form method="post">
		Enter Category Name : <input type="text" ng-model="category.categoryName"><br/><br/>
		<button ng-click="addCat(category)">Add Category</button>
		
	</form>
	
	</div>
	<script type="text/javascript">

	var app = angular.module('myApp', []); 

	app.service('dataService', ['$http', function ($http) 
	{

        var urlBase = 'http://localhost:8282/Restful/home';

        this.getCategories = function () 
        {
            return $http.get(urlBase + "/list/categories");
        };
        
        
        this.getUser = function () 
        {
            return $http.get(urlBase + "/list/user");
        };
        
       

        /* this.getCustomer = function (id) {
            return $http.get(urlBase + '/' + id);
        };*/

        this.insertCategory = function (cat)
        {
            return $http.post(urlBase+"/newCategory", cat);
        };

        /*this.updateCustomer = function (cust) {
            return $http.put(urlBase + '/' + cust.ID, cust)
        };

        this.deleteCustomer = function (id) {
            return $http.delete(urlBase + '/' + id);
        };

        this.getOrders = function (id) {
            return $http.get(urlBase + '/' + id + '/orders');
        }; */
    }]);
	
	app.controller('Hello', ['$scope','dataService','$window',function($scope, dataService, $window) 
	{
		dataService.getCategories()
	            .then(function (response) 
	            {
	                $scope.categories = response.data;
	            }, function (error)
	            {
	                $scope.status = 'Unable to load customer data: ' + error.message;
	            });
		
		
		dataService.getUser()
        .then(function (response) 
        {
            $scope.users = response.data;
        }, function (error)
        {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
		
		
		
		/* $scope.addCat = function()
		{
			window.alert($scope.category.categoryName);
			dataService.insertCategory($scope.category)
            .then(function (response)
            {
                $scope.categories.push($scope.category);
                $window.location.reload();
            }, function(error) {
                $scope.status = 'Unable to insert customer: ' + error.message;
            }); */
		//}
		
		
	}]); 
		
		
		
		


		
	/*	app.controller('Hello1', ['$scope','dataService','$window',function($scope, dataService, $window) 
		{
			dataService.getUser()
		            .then(function (response) 
		            {
		                $scope.users = response.data;
		                console.log("to check");
		                console.log($scope.users );
		                
		            }, function (error)
		            {
		                $scope.status = 'Unable to load customer data: ' + error.message;
		            });
			
		 $scope.getlogin = function()
			{
				window.alert($scope.category.categoryName);
				dataService.insertCategory($scope.category)
	            .then(function (response)
	            {
	                $scope.categories.push($scope.category);
	                $window.location.reload();
	            }, function(error) {
	                $scope.status = 'Unable to insert customer: ' + error.message;
	            });
			}
			 
			
	
		}]); */
		
	
	</script>

</body>
</html>