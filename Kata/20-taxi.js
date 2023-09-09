const rightDirection = {
    "north": "east",
    "east": "south",
    "south": "west",
    "west": "north"
};

const leftDirection = {
    "north": "west",
    "east": "north",
    "south": "east",
    "west": "south"
}


const moveLoop = (instructions) => {
    let position = {
        east: 0,
        north: 0
    };

    let direction = "north";

    instructions.forEach(ins => {
        if (ins === "left"){
            direction = leftDirection[direction];
            //console.debug(ins, direction, position);
        } else if (ins === "right"){
            direction = rightDirection[direction];
            //console.debug(ins, direction, position);
        } else {
            if (direction === "north"){
                position.north += ins;
                //console.debug(ins, direction, position);
            } else if (direction === "south"){
                position.north -= ins;
                //console.debug(ins, direction, position);
            } else if (direction === "east"){
                position.east += ins;
                //console.debug(ins, direction, position);
            } else if (direction === "west"){
               position.east -= ins;
               //console.debug(ins, direction, position);
            } else {
                throw TypeError("invalid number", ins);
            }
        }
    });
    return position;
}


const blocksAway = function (instructions) {
    return moveLoop(instructions);
  };
  
  console.log(blocksAway(["right", 2, "left", 3, "left", 1])); //{east: 1, north: 3}
  console.log(
    blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]) //{east: 3, north: 3}
  );
  console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));//{east: 0, north: 0}