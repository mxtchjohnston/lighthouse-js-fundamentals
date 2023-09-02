const howManyHundredsFail = function(i){
  return (i < 100) ? 0 : Number((i / 100).toFixed(0))
}

const howManyHundreds = function(i){
  while (i % 100 != 0){
    i--;
  }
  return (i < 100) ? 0 : Number((i / 100).toFixed(0))
}

console.log(howManyHundreds(520))
console.log(howManyHundreds(1000))
console.log(howManyHundreds(123456))