const numberOfVowels = function(data) {
    const vowels = ['a','e','i','o','u'];
    const arrayData = data.split(''); // char array conversion
    let sum = 0;

    arrayData.forEach(element => {
      if (vowels.includes(element)){
        sum += 1; //1 per vowel
      }
    }); // 
    return sum; //Guaranteed return
  };
  
console.log(numberOfVowels("orange")); //3
console.log(numberOfVowels("lighthouse labs"));//5
console.log(numberOfVowels("aeiou"));//5
