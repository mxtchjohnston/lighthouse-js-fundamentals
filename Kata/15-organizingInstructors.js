
const organizeInstructors = function (instructors) {
    let courses = {}
    instructors.forEach(element => {
        courses[element.course] = []
    });
    //2 for each loops allows for less logic checking, simplifies the whole process.
    instructors.forEach(element => {
        courses[element.course].push(element.name);
    });
    return courses;
  };
  
  console.log(
    organizeInstructors([
      { name: "Samuel", course: "iOS" },
      { name: "Victoria", course: "Web" },
      { name: "Karim", course: "Web" },
      { name: "Donald", course: "Web" },
    ])
  );
  console.log(
    organizeInstructors([
      { name: "Brendan", course: "Blockchain" },
      { name: "David", course: "Web" },
      { name: "Martha", course: "iOS" },
      { name: "Carlos", course: "Web" },
    ])
  );