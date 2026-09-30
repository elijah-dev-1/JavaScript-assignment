// STUDENT PROFILE


let firstName = `Elijah`;
let lastName = `Amakato`;
let age = 29;
const gpa = 3.95;
const studentID = `STU-00123`;
const isEnrolled = true;
const graduationDate = null;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(studentID);
console.log(gpa);
console.log(isEnrolled);
console.log(graduationDate);


//change first name to nickname
firstName = `Eli`;
console.log(firstName);



// TASK 2...
let totalScore = 0;


totalScore = totalScore + 45;
console.log("After first test:", totalScore);

totalScore = totalScore + 30;
console.log("After second test:",  totalScore);

totalScore = totalScore -5;
console.log("After deduction:", totalScore);

totalScore = totalScore * 2;
console.log("After bonus round:", totalScore);

totalScore++;

console.log("After adding 1 point:",  totalScore);

console.log("remainder:", totalScore %7);


//   TYPE CONVERSION
let studentAge = "19";
studentAge = parseInt(studentAge);


let examScore = "74.5";
examScore = parseFloat(examScore);

let passMark = "50";
passMark = Number(passMark);

let studentName = 101;
studentName = String(studentName);


console.log(typeof studentAge, studentAge);
console.log(typeof examScore, examScore);
console.log(typeof passMark, passMark);
console.log(typeof studentName, studentName);

console.log(examScore > passMark);

// TASK 4 — CONDITIONAL STATEMENTS
let score = 73;
let grade;

if (score >= 70) {
    grade = "A — Distinction";
}
  else if (score >= 60) {
    grade = "B — Merit";
} 
else if (score >= 50){
    grade = ("C — Pass");
}

else if (score >= 40) {
    grade = ("D — Near Pass");
}

else {
    grade = ("F — Fail");
}

console.log(`Score: ${score} | Grade: $ {grade}`);