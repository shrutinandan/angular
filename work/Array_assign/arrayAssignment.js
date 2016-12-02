
var noiseArray=["honk"];  //Create a variable called noiseArray and assign it to an array literal. 


		//Using a native array method…
		noiseArray.push("sneeze");	//Add a noise to the end of the noiseArray.
		noiseArray.unshift("quack");//Add another noise to the beginning of the noiseArray.
		
		//Using Bracket Notation…
		noiseArray['']='loud'; 
		
        console.log(noiseArray);	//output is ["quack", "honk", "sneeze","loud"]
		
		var len=noiseArray.length;//will calculate the length
		console.log(len);    		//output is 4
		
		var index=noiseArray.length - 1;//last index of array
/*--------------------------------------------------------------------------------------------------------------*/

var animal = [];

       // First way (Array in the Object)		
var animal={username:"DaffyDuck",
            tagline:"Yipee!!!",
			noises:noiseArray.value};
			
			console.log(animal);	
		
		
		//second way is:
		
                animal[0]="username";
                animal[1]="tagline";
                animal[2]="noises";

                animal.username = "DaffyDuck";
                animal.tagline = "Yippeee!";
                animal.noises = noiseArray;
                
                console.log(animal);
				
	//output is:{ username: "DaffyDuck", tagline: "Yippeee", noises: ['quack', "honk", "sneeze","loud"] }	

/*-------------------------------------------------------------------------------------------------------------*/

//-------------------ANIMAL COLLECTIONS----------------------------//
	
var animals = [];   // Create a variable called animals and set it equal to an empty array
animals.push(animal);

var quackers={ username: 'DaffyDuck', tagline: 'Yippeee!', noises: ["quack", "honk", "sneeze", "loud"] };  // Created a variable called quackers and assigned it to object
	


var second={username:"tweety",tagline:"I am gud",	noises:noiseArray};		// Created a variable called second and assigned it to object


animals.unshift(quackers);
	

animals;			//to check no of objects	
					//output:[Object, animal(username, tagline, noises)]
	

			
animals.unshift(second);			//add another  variable
		
				
									//to check no of objects	
animals;						 //output:[Object, Object, animal(username, tagline, noises)]

var length=animals.length;//will calculate the length
		console.log(length);    	
