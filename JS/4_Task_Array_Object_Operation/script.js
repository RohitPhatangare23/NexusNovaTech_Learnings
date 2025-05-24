// Sample array of student objects
const students = [
    { name: "uday", age: 23, score: 81 },
    { name: "rohit", age: 12, score: 65 },
    { name: "ritik", age: 55, score: 90 },
    { name: "virat", age: 32, score: 72 },
    { name: "dhoni", age: 28, score: 78 }
];

// Filter students with scores above 75
function filterStudents() {
    const filtered = students.filter(student => student.score > 75);
    console.log("Filtered Students (Score > 75):", filtered);
}

// Sort students by age in ascending order
function sortByAge() {
    const sorted = [...students].sort((a, b) => a.age - b.age);
    console.log("Sorted by Age:", sorted);
}

// Map the array to return only student names
function mapNames() {
    const names = students.map(student => student.name);
    console.log("Student Names:", names);
}
