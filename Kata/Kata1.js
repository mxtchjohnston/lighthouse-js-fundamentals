/*
    Some of the following katas deal with arrays and looping. If you're having some trouble completing these, 
    you might find it helpful to revisit some of the previous exercises, such as "Looping and Repetition", 
    "Array Operations and Properties", and "Looping Over Arrays". 
    JavaScript does have some built-in helper functions for working with arrays such as .sort, .map, .filter, and others, 
    but it is highly recommended to avoid those functions while working through the prep katas.
*/ 

const sumLargestNumbers = function(data) {
    data.sort((a,b) => b - a); //Sorts by number descending, invert for ascending
    if (data.length >= 2){
      return data[0] + data[1];
    } else{
      return 0;
    }
  }

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([]));

/*
   11
    5
    126
*/