function transposeArray(arr) {
    const numRows = Array(arr).length;
  
    const transposedArray = [];
  
    for (let col = 0; col < numRows; col++) {
      transposedArray[col] = [];
      for (let row = 0; row < numRows; row++) {
        transposedArray[col][row] = arr[row][col];
      }
    }
    return transposedArray;
  }

function makeSquare(array, side){
    let newArray = []
    for (let row = 0; row < side; row++){
        let newRow = []
        for (let col = 0; col < side; col++){
            newRow.push(array.pop());
        }
        newArray.push(newRow);
    }
}

const squareCode = function (message) {
    message = message.replace(" ","");
    let side = Math.ceil(Math.sqrt(message.length));
    let list = message.split('').reverse();
    let _2DArray = transposeArray(makeSquare(list));
    return _2DArray.map(a => a.join(''));
  };
  
  console.log(squareCode("chill out"));
  console.log(squareCode("feed the dog"));
  console.log(squareCode("have a nice day"));
  console.log(
    squareCode("if man was meant to stay on the ground god would have given us roots")
  );