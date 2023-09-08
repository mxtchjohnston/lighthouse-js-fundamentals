const generateBoard = (w, b) => {
    let board = [];
    for (let row = 0; row < 8; row++){
        let strip = []
        for (let col = 0; col < 8; col++){
            if ((w[0] == row && w[1] == col) || (b[0] == row && b[1] == col)){
                strip.push(1);
            } else {
                strip.push(0);
            }
        }
        board.push(strip);
    }
    return board;
}

const queenThreat = (board) => {
    for (let row = 0; row < board.length; row++){
        for (let col = 0; col < board.length; col++) {
            if (board[row][col] === 1){
                return analyzeStarPattern(board, [row, col]);
            }
        }
    }
    return false;
}

const analyzeStarPattern = (array, coordinates) => {
    const numRows = array.length;
    const numCols = array[0].length;
    const [centerX, centerY] = coordinates;
  
    if (centerX < 0 || centerX >= numRows || centerY < 0 || centerY >= numCols) {
      throw new Error('Invalid coordinates');
    }
  
    // set coord to zero
    array[centerX][centerY] = 0;

    // Set values in the same row
    for (let col = 0; col < numCols; col++) {
      if (col !== centerY) {
        if (array[centerX][col] == 1){
            return true;
        }
      }
    }
  
    // Set values in the same column
    for (let row = 0; row < numRows; row++) {
      if (row !== centerX) {
        if (array[row][centerY] == 1){
            return true
        }
      }
    }
  
    // Set values in diagonals
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        if (
          row + col === centerX + centerY ||
          row - col === centerX - centerY
        ) {
          if (array[row][col] == 1){
            return true
          }
        }
      }
    }
  
    return false;
  }

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));