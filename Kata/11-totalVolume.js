// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  return (4 / 3) * PI * radius ** 3; // exponentiation operator
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return (1 / 3) * PI * (radius ** 2) * height;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return height * width * depth;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let sum = 0;
  solids.forEach(element => {
    switch (element.type){
        case "sphere":
            sum += sphereVolume(element.radius);
            break;
        case "cone":
            sum += coneVolume(element.radius, element.height);
            break;
        case "prism":
            sum += prismVolume(element.height, element.width, element.depth);
            break;
    }
  });
  return sum;
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);