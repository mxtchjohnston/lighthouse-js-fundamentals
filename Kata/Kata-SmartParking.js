/*
In your city, you've noticed parking has become quite a mess for yourself and your neighbours. 
In an effort to help out, you've decided this is the perfect opportunity to install a smart parking system.

The system will use special parking sensors to keep track of all parking spots and monitor which ones are available. 
Every time a vehicle enters the parking lot, the system directs them to an available spot for their particular vehicle type, 
or notifies them that no spots are available.

Instruction
You need to write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, 
or returns false if there is no available spot. Your function receives an array of arrays representing parking spots, 
and a string with the type of vehicle that is looking for a parking spot.

There are three kinds of possible vehicles: regular cars, small cars, and motorcycles.

Regular cars can only park in R spots.
Small cars can park in R or S spots.
Motorcycles can park in R, S, or M spots.
In the array of parking spots, spots are written in both lowercase and uppercase. 
An uppercase letter means that the particular spot is AVAILABLE, while lowercase letters mean that the spot is UNAVAILABLE.

Your function must return an array with the coordinates of the spot as an [X, Y] pair. 
See the example input and output below for an illustration.
*/

const whereCanIPark = function (spots, vehicle) { // [X, Y] | false
    const options = {
      "regular": ['R'],
      "small": ['S', 'R'], // Prefer small to regular 
      "motorcycle": ['M','S','R'] //prefer motorcycle to small to regular
    }

    const vehicleOptions = options[vehicle];
    console.log(vehicleOptions);
    let answer = false;

    vehicleOptions.forEach(element => { //unpacking and testing options in order
      console.log("looking for ", element);
      for (let y = 0; y < spots.length; y++){ //rows are layed out first in memory
        for (let x = 0; x < spots[y].length; x++){ // columns are second order elements in memory
          if(spots[y][x] === element){
            answer = [x,y];
            break;
          }
        }
      }
    });

    return answer; 
  };
  
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))