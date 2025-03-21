// JavaScript statements
let age=30;
if (age>18) {
    console.log("you can get licences");
}
else{
    console.log("you can't get licences");
}

let marks=75;

if (marks>=80) {
    console.log("You got an A grade");
}
else if (marks>=70 && marks<80) {
    console.log("You got a B grade");
}
else if (marks>=60 && marks<70) {
    console.log("You got a C grade");
}
else if (marks>=50 && marks<60) {
    console.log("You got a D grade");
}
else{
    console.log("You got an F grade");
}

// switch case statements
let grade = 'B';
let result;
switch (grade) {
    case 'A':
        result = "A (Excellent)";
        break;
    case 'B':
        result = "B (Good)";
        break;
    case 'C':
        result = "C (Average)";
        break;
    case 'D':
        result = "D (Below Average)";
        break;
    case 'F':
        result = "F (Need of Improvments | Poor)";
        break;
    default:
        result = "No Grade";
}
console.log(result);

// Literals
let name='Rohit'
console.log(`my name is ${name}`);

let x = 50;
let y = 10.55;
console.log(`The sum of ${x} and ${y} is ${x + y}`);

const s = `This is a multi-line
string that spans across
several lines.`;
console.log(s);