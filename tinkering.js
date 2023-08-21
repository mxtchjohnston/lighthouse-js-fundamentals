// function multiply(a, b) {
//     return a * b;
//   }
  
// const result = multiply(2, 4);
  
// console.log(result);

// var donuts = ["glazed", "chocolate frosted", "boston cream", "powdered", "sprinkled", "maple", "coconut", "jelly"];


// donuts[2] = "cinnamon twist";
// donuts[4] = "salted caramel";
// donuts[5] = "shortcake eclair";

// console.log(donuts)

// const range = (start, end, step) => {
//   let array = []
//   if (start === undefined || end === undefined || step === undefined || start > end || step >= 0){
//     return array;
//   }

//   for (let i = start; i < end; i = i + step){
//     array.push(i);
//   }
//   return array;
// }

// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));

const lastIndexOf = function(array, elem){
  for (let i = array.length  - 1; i >= 0; i--){
    //console.log(i)
    if (array[i] == elem){
      return i
    }
  }
  return -1
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);