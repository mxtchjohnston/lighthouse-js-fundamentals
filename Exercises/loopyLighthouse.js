// for (let i = 100; i <= 200; i++){
//   let output = "";

//   if (i % 3 === 0){
//     output += "Loopy"
//   }

//   if (i % 4 === 0){
//     output += "Lighthouse"
//   }

//   if (output == ""){
//     console.log(i);
//   } else {
//     console.log(output);
//   }
// }

const loopyLighthouse = function(range, multiple, words){
  let array = []
  for (let i = range[0]; i <= range[1]; i++){
    let output = ""
    for (let j = 0; j <= multiple.length; j++){
      if (i % multiple[j] === 0){
        output += words[j];
      }
    }

    if(output == ""){
      array.push(i);
      console.log(i);
    } else {
      array.push(output);
      console.log(output);
    }
  }
  return array
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);