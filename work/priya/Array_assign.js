"use strict";

var noiseArray=["chrip"];

noiseArray.push("bark");//add at end of array

noiseArray.unshift("meww");//add at front of array

			
noiseArray[noiseArray.length]='chuckle';

var len=noiseArray.length;

var index=noiseArray.length - 1;//last index of array


var animal={username:"DaffyDuck",
            tagline:"Yipee!!!",
			noises:noiseArray};
			
			console.log(animal);
			
			
var addAtLast=noiseArray.push(noiseArray.length-1,"chuckle");


var animals=Array();

animals.push(animal);


var quakers={username:"DaffyDuck",
            tagline:"Yipee!!!",
			noises:noiseArray};
			
			animals.unshift(quakers);
			
			
			console.log(animals);
			
			
			var crackers={username:"tweety",
            tagline:"I m too small",
			noises:noiseArray};
			
			animals.unshift(crackers);
			
			
			var makers={username:"scooby",
            tagline:"scooby doo!!!",
			noises:noiseArray};
			
			animals.unshift(makers);
			
			
			console.log(animals.length);