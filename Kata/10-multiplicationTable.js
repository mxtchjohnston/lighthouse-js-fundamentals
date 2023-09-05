
const multiplicationTable = function (maxValue) {
    table = Array();
    for (let i = 1; i <= maxValue; i++){
        let row = Array();
        for (let j = 1; j <= maxValue; j++){
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
  };
  
  console.log(multiplicationTable(1));
  console.log(multiplicationTable(5));
  console.log(multiplicationTable(10));