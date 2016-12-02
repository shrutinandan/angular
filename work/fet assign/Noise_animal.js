
//an array is assigned value
var noiseArray=['bark']

//to add an element at beginning
noiseArray.unshift('quack');// returns 2

//to add an element at the end
noiseArray.push('honk');// returns3

//to dispaly array
noiseArray//["quack", "bark", "honk"]


//add noise using bracket notation
noiseArray[3]='sneeze';//"sneeze"

//to dispaly array
noiseArray //["quack", "bark", "honk", "sneeze"]

//to find length
noiseArray.length //4

//// checking the index of the last element of the array
noiseArray.indexOf("sneeze");//3



//////////////////adding noisearray in animal array//////////////////////

//create an array
var animal={}

//setting the properties and its values(Way 1)///////////////////
var animal={username:"DaffyDuck",
            tagline:"Yipee!!!",
			noises:noiseArray};



//setting the properties and its values(Way 1)///////////////////

 animal[0]="username";
 animal[1]="tagline";
 animal[2]="noises";

animal.username = "DaffyDuck";
animal.tagline = "Yippeee!";
animal.noises = noiseArray;





//display 
animal //Object {username: "DaffyDuck", tagline: "Yipee!!!", noises: Array[4]}


///////////////////////////////////////////////////////////////////////////////
///////////////////////Animal Collections////////////////////////////



//create a array
var animals=[];


//add previous animal array to this
animals.push(animal);

// Created a variable called quackers and assigned it to object
var quackers={ username: 'DaffyDuck', tagline: 'Yippeee!', noiseArray: ['quack', 'honk', 'sneeze', 'growl'] };
				
				
				
				//make 2nd array
	var another={username:"tweety",
            tagline:"I am gud",
			noises:noiseArray};		

animals.unshift(quackers);
	
//to check no of objects	
animals
[Object, Object]			

//add another  variable			
animals.unshift(another);
		
				
//to check no of objects				
animals //[Object, Object, Object]


//to calcualte the length
var len=animals.length

console.log(len);// 3			
				
				
				
				
				
				
				
				
				
				
			