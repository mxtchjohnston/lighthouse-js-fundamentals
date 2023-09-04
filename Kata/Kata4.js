const instructorWithLongestName = function (instructors) {
    instructors.sort((a, b) =>{
      return b.name.length - a.name.length; // Sorts based on name length descending
    });

    return instructors[0];
  };
  
console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);