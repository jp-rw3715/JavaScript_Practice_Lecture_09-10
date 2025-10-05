// ===============================
// 1. Simple JavaScript Object
// ===============================
{
  let employee = {
    firstName: "Kunal",
    age: 25,
    department: "Frontend Development",
  };

  console.log(employee.firstName); // Dot notation
  console.log(employee["age"]); // Bracket notation
  console.log(employee.department);
}

// ===============================
// 2. Object Method (Function inside object)
// ===============================
{
  let user = {
    firstName: "Anita",
    lastName: "Shah",
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
  };

  console.log("Complete Name:", user.getFullName());
}

// ===============================
// 3. Object with Array Property
// ===============================
{
  let user = {
    firstName: "Anita",
    lastName: "Shah",
    scores: [15, 25, 35, 45, 55],
  };

  console.log("Fourth score:", user.scores[3]);
}

// ===============================
// 4. Array Containing Objects
// ===============================
{
  let members = [
    { id: 101, name: "Kunal", score: 65 },
    { id: 102, name: "Riya", score: 72 },
    { id: 103, name: "Amit", score: 88 },
    { id: 104, name: "Sneha", score: 79 },
  ];

  console.log("Member with id 103:", members[2].name);
}

// ===============================
// 5. Loop Over Array of Objects
// ===============================
{
  let members = [
    { id: 101, name: "Kunal", score: 65 },
    { id: 102, name: "Riya", score: 72 },
    { id: 103, name: "Amit", score: 88 },
    { id: 104, name: "Sneha", score: 79 },
  ];

  for (let i = 0; i < members.length; i++) {
    console.log(members[i].name + " scored " + members[i].score);
  }
}

// ===============================
// 6. Accessing Objects Conditionally
// ===============================
{
  let learners = [
    { name: "Meera", score: 85 },
    { name: "Rajesh", score: 95 },
    { name: "Deepak", score: 60 },
  ];

  for (let i = 0; i < learners.length; i++) {
    if (learners[i].score > 80) {
      console.log(
        learners[i].name + " excelled with a score of " + learners[i].score
      );
    }
  }
}
