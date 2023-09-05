const camelCase = function (input) {
    let splitInput = input.split(" ");
    for (let i = 1; i < splitInput.length; i++) { //skips 0th element
        splitWord = splitInput[i].split(""); //char array
        splitWord[0] = splitWord[0].toUpperCase(); //first letter
        splitInput[i] = splitWord.join(""); //rejoin
    }
    return splitInput.join("");
  };
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));