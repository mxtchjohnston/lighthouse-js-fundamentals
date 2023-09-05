const repeatNumbers = function (data) {
    let ans = [];
    data.forEach(element => {
        //                     of size          of element
        let filled = new Array(element[1]).fill(element[0]);
        ans.push(filled.join("")); //add string to array
    });
    return ans.join(", "); //concatenation happens last to add comma
  };
  
  console.log(repeatNumbers([[1, 10]]));
  console.log(
    repeatNumbers([
      [1, 2],
      [2, 3],
    ])
  );
  console.log(
    repeatNumbers([
      [10, 4],
      [34, 6],
      [92, 2],
    ])
  );