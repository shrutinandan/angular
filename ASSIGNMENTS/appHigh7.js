var myapp = angular.module('myapp', ['highcharts-ng']);

myapp.controller('myctrl', function ($scope) {

   $scope.addPoints = function () {
        var seriesArray = $scope.highchartsNG.series
         var rndIdx = Math.floor(Math.random() * seriesArray.length);
		
         seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 5, 10])
    };

	
	  var randomData = function() {
	  console.log("data there",$scope.highchartsNG.series);
         var len = 10;
		 var seriesArray = $scope.highchartsNG.series
         var dataArray = [];
        // for(var i = 0; i < len; i++) {  
// console.log	('array value',seriesArray[i]);	
			// dataArray.push(Math.floor(seriesArray[i] * 20) + 1)
        
        // }
		for(var i = 0; i < len; i++) {
            
            dataArray.push(Math.floor(Math.random() * 20) + 1);
        }
         return dataArray;
    };
    
	
	
	
    $scope.addSeries = function () {
        // var rnd = []
        // for (var i = 0; i < 10; i++) {
		// console.log("value",(Math.floor(Math.random() * 20) + 1));
            // rnd.push(Math.floor(Math.random() * 20) + 1)
        // }
		  
		var temp = randomData();
		console.log("in function", temp);	
        $scope.highchartsNG.series.push({

           data:temp
		   });
	
        
    }

    $scope.removeRandomSeries = function () {
         var seriesArray = $scope.highchartsNG.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
         seriesArray.splice(rndIdx, 1)
				
        // var seriesLength = $scope.highchartsNG.series
		// var rndIdx = Math.floor(Math.random() * seriesLength.length);
        // for(var i = seriesLength -1; i > -1; i--) {
            // seriesArray[i].splice();
        }
    

    $scope.options = {
        type: 'line'
    }

    $scope.swapChartType = function () {
        if (this.highchartsNG.options.chart.type === 'line') {
            this.highchartsNG.options.chart.type = 'bar'
			$scope.highchartsNG.series.push(		{
		  type: 'bar'
			});
			
        } else {
            this.highchartsNG.options.chart.type = 'line'
			$scope.highchartsNG.series.push(
		{
		  type: 'line'
		});
        }
    }

    $scope.highchartsNG = {
        options: {
            chart: {
                type: 'bar'
            }
        },
        series: [{           
			data: [10, 15, 12, 8, 7],
			
        }],
		
		
		
        title: {
            text: 'Hello'
        },
        loading: false
    }

});


// //    $('.addSeries').click(function() {
        
        // var chart = $('#container').highcharts();
        // chart.addSeries({
            // type: 'column',
            // data: randomData()
        // });
        // $('.remove').removeAttr('disabled');
    // });
    
	// $('.remove').click(function() {
		// var chart = $('#container').highcharts();
        // var seriesLength = chart.series.length;
        // for(var i = seriesLength -1; i > -1; i--) {
            // chart.series[i].remove();
        // }
		// this.disabled = true;
	// });