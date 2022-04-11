var express = require("express");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var item = require("./function.js");
app.post("/student", (req, res) => {
  let Input = item;
  const { branchStudents, branchs, students } = Input;
  console.log(Input.branchStudents);
  let a = [];
  branchStudents.map((branchstudent) => {
    var branch = branchs.find((branch) => {
      return branchstudent.branchId == branch.id;
    });
    var student = students.find((student) => {
      return branchstudent.studentId == student.id;
    });
    a.push({
      id: branchStudents.id,
      branchId: branchStudents.branchId,
      branchName: branch.name,
      studentId: branchStudents.studentId,
      studentName: student.name,
    });
  });
  console.log(a);
  res.send({ branchStudentMap: a });
});

app.listen(3000, () => {
  console.log("server runs on 3000");
});
