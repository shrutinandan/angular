<ul class = "list-group" ng-repeat="apps in data " ng-style="">
   <li >{{apps.dashboard}} </li>
   <li > {{apps.author}} {{apps.modified}} </li>  
   <li>views:{{apps.views}} <span ng-repeat="day  in apps.rating track by $index" ng-style="day" 
	class="glyphicon glyphicon-star" style="color:yellow;" >
	{{day.apps.rating}}</span>
	<span class = "glyphicon glyphicon-star-empty"></span> 
	<span class="glyphicon glyphicon-yen"></span>
	</li>
 
   
	
</ul> 