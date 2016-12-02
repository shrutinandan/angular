

var animal={};					//create a variable animal and assign it to  object literal

	//With Dot Notation…	------------						
	animal.username="daffyDuck"; //add a property username and then assign it a value
								//outpuy:daffyDuck"
			
	animal ;  					//To dispaly object
								//output:Object {username: "daffyDuck"}							
								
								

	//With Bracket Notation…----------
	animal['tagline']='Yipeee!';//to add property 
								//output:"Yipeee!"


	animal;						//To display object
								//output:Object {username: "daffyDuck", tagline: "Yipeee!"}



var noises=[];					//create an empty noise array

animal.noises=noises; 	 		//	assign the  noises array to your object.
								//output:[]/

animal;					//final output: Object {username: "daffyDuck", tagline: "Yipeee!", noises: Array[0]}

/*-----------------------------------------------------------------------------------------*/

//function to  count number of elements
var getCount = function(obj){
   var keys = [];
var counter=0;
   for(var key in obj){
      keys.push(key);
counter++;   
}
console.log(counter);
   return keys;
}

//calling of function
getCount(animal);// 3   //["username", "tagline", "noises"]


/*------------------------------------------------------------------------------------------*/

  //////////////to use if else loop/////////////////////

for(var obj in animal) {

var key=animal[obj];
	
     
	if(key="DaffyDuck")
	{
		console.log("Hi  my name is "+key);
		
	}
 else if(key="tagline")
	{
		console.log("i like to say "+key);
		
	}
}
											//output is: hi my name is DaffyDuck

/*-------------------------------------------------------------------------------------*/
//What happens if you return 'Hi my name is ' + ___ instead of using console.log() inside the loop?



for(var obj in animal) {

var key=animal[obj];
	
  
	if(key="DaffyDuck")
	{
		return'hi my name is '+key;
		
	}
 else if(key="tagline")
	{
		return 'i like to say '+key;
		
	}
}
//output will be: Illegal return statement
/*-----------------------------------------------------------------------------------------*/