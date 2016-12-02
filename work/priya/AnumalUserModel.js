

var animal=new Object();

animal.username="dog";

console.log(animal);

animal['tagline']="Love animals";

var noises=Array();

animal.noises=noises;

	var count=0;
for (var key in animal) {
	


  if (animal.hasOwnProperty(key)) {

	if(key=="username")
	{
		console.log("HI!! my name is"+" "+animal[key]);
	}
	if(key=="tagline")
	{
		console.log("I like to say "+" "+animal[key]);
	}
	
	count++;
  }
  
  
}
console.log("number of properties:"+count);



	var count=0;
for (var key in animal) {

  if (animal.hasOwnProperty(key)) {

	if(key=="username")
	{
	    returrn "HI!! my name is"+" "+animal[key];  // it gives an error
	}
	if(key=="tagline")
	{
		console.log("I like to say "+" "+animal[key]);
	}
	
	count++;
  }
  
  
}
console.log("number of properties:"+count);



