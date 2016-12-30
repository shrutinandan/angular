var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.pro = [{product: "chicken", rating: 1},
  {product: "fish", rating: 4},
  {product: "pizza", rating: 6}];
  for(var i=0;i<$scope.pro.length;i++)
  {
     if($scope.pro[i].rating >0)
     {
         $scope[$scope.pro[i].product]=[];
         for(var j=0;j< $scope.pro[i].rating;j++)
         {
            $scope[$scope.pro[i].product].push({}); 
         }
         $scope.pro[i].rating = $scope[$scope.pro[i].product];
     }
  }
});