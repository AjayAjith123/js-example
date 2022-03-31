var express = require("express");
var app = express();

const bodyparser = require('body-parser')
const addit =require('./function');

app.use(bodyparser.json());
  
app.post('/std',(req,res) => {
    const input = addit;
    let a = [];
input.branchStudents.map((branchstudent) => {
  var branch = input.branches.find((branch) => {
    return branchstudent.branchId == branch.id;
  });
  var student = input.students.find((student) => {
    return branchstudent.studentId == student.id;
  });
  a.push({
    id: branchstudent.id,
    branchId: branchstudent.branchId,
    branchName: branch.name,
    studentId: branchstudent.studentId,
    studentName: student.name,
  });
});

res.json({ branchstudentmap : a });
})
app.listen(4000, () =>{
    console.log("server starts on 4000");
})