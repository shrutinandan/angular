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
		User ID : <input type="text" ng-model="user.userId"><br/><br/>
		Password Name : <input type="text" ng-model="user.password"><br/><br/>
		<button ng-click="Login(user)">Login</button>
		
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
		
		
		
		 $scope.Login = function()
		{
			 
			 
			 var id = $scope.user.userId;
			 var pass = $scope.user.password;
			 dataService.getUser()
		        .then(function (response) 
		        {
		        	
		        	var flag = 0;
		            $scope.users = response.data;
		            
		            for(var i = 0; i < $scope.users.length; i++)
		            	{
		            		var user = $scope.users[i];
		            		if(user.password==pass && user.userId==id)
		            			{
		            			    flag=1;
		            			    break;
		            			}
		            	
		            	}
		            
		            if(flag)
		            	{
		            		console.log("you may enter");
		            		 $window.location.href = '/Restful/success.jsp';
		            	}
		            else
		            	{
		            		console.log("invalid credentials");
		            		 $window.location.href = '/Restful/index.jsp';
		            	}
		        }, function (error)
		        {
		            $scope.status = 'Unable to load customer data: ' + error.message;
		        });
			 }
		
		
	}]); 
		
		
		
		


	
	
	</script>

</body>
</html>