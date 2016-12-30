 var myApp = angular.module('myApp', []);
 myApp.service('demoData', function(){
        	return{
          	data: [{
            	name: 'Pranjal',
              id: 1,
              company: 'Cybage'
            }, {
            	name: 'Pranjal Again',
              id: 1,
              company: 'Cybage'
            }]
          }
        })
 myApp.controller('demoController',['$scope', 'demoData', function($scope, demoData){
        	
            $scope.demoData = demoData; 
            	console.log('in controller main', $scope.demoData)
        }])
      
         myApp.directive("myWidget", function () {
            return {
                restrict: "E",
        				scope: {
                	data: '='
                },
				transclude:true,
                template: "<div>{{data.name}} works in {{data.company}}",
                controller: function($scope){
                	console.log('in controllerdsfsdfs', $scope.data);
                }

            };
        });

        myApp.directive("myWidget2", function () {
            return {
                restrict: "E",
                template: "<div><h3>Another heading</h3></div>"
            };
        })