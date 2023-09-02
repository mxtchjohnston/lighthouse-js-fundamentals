//Added constraint supressing use of filter
// values . filter . fold (+)

const conditionalSum = function(values, condition) {
    let sum = 0; //initialized running sum 
    values.forEach(element => {
      if (condition === "odd" && isOdd(element)){
        sum += element;
      } else if (condition === "even" && !isOdd(element)){
        sum += element;
      }
    }); //elegance
    return sum; // guaranteed return of zero.
  };

const isOdd = function(i){
  return (i % 2 === 1);
}

console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([], "odd"));

/*
6
9
144
0
*/