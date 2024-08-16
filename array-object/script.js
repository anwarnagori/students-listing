const students = [
  {
    name: "John Doe",
    semester: 3,
    father_name: "Doe",
    isFeePaid: true,
    courses: ["Mathematics", "Physics", "Computer Science"],
  },
  {
    name: "Jane Smith",
    father_name: "Smith",
    semester: 2,
    isFeePaid: true,
    courses: ["Biology", "Chemistry", "English"],
  },
  {
    name: "Emily Johnson",
    father_name: "Johnson",
    semester: 4,
    isFeePaid: false,
    courses: ["Economics", "Statistics", "Marketing"],
  },
];


const studentInfo = document.getElementById("students-info");

for (let i = 0; i < students.length; i++) {

  const information = document.createElement("H3");

  information.className = "text";

  information.innerHTML = `

  Name:  ${students[i].name} 

   <br />
  
  Father_Name: ${students[i].father_name}
  
   <br />
  
  Semester: ${students[i].semester}
  
   <br />
  
  Fee_Paid: ${students[i].isFeePaid}
  
  `;

  studentInfo.appendChild(information);



  const coursesList = document.createElement("UL");

  coursesList.className = "list"
  for (let j = 0; j < students[i].courses.length; j++) {

    const subNames = document.createElement("LI");

    subNames.innerHTML = students[i].courses[j];

    coursesList.appendChild(subNames);
  }

  studentInfo.appendChild(coursesList);

}