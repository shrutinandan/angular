
//create a variable animal and assign object literal
var animal={}

//add a property username and then assign it a value
animal.username="daffyDuck"  //"daffyDuck"


//To dispaly object
animal    //Object {username: "daffyDuck"}


//to add property using bracket notation
animal['tagline']='Yipeee!';//"Yipeee!"

//To display object
animal
//Object {username: "daffyDuck", tagline: "Yipeee!"}


//create an empty noise array
var noises=[];


//	Add the noises array to your object.
animal.noises=noises;  //[]



///////////////////desired output///////////////////////////
animal//Object {username: "daffyDuck", tagline: "Yipeee!", noises: Array[0]}








///function to get count of elements/////////////////////
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



  

  //////////////to use if else loop/////////////////////

for(var obj in animal) {
	alert(obj);
var key=animal[obj];
	
    alert(key); 
	if(key="DaffyDuck")
	{
		console.log("hi my name is "+key);
		
	}
 else if(key="tagline")
	{
		console.log("i like to say "+key);
		
	}
}
//hi my name is DaffyDuck






////////////output---Illegal return statement/////////////////
for(var obj in animal) {
	alert(obj);
var key=animal[obj];
	
    alert(key); 
	if(key="DaffyDuck")
	{
		return'hi my name is '+key;
		
	}
 else if(key="tagline")
	{
		return 'i like to say '+key;
		
	}
}