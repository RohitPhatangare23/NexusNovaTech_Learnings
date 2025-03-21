/*
 variable = named memory location
 3 way to use variable = var | let | const
*/

// 1 -  var declaration  -------------------------------------------------------------------------------------------

var myVariable; // declaration
myVariable = 10; // assignment
console.log(myVariable); // 10

var age=23;
if (true){ console.log(age); }    
    
function solve() {
    var marks=95;
    console.log(marks); // 95
}
// console.log(marks); // error message marks is not defined
solve();  

// redeclaration allowed
var i=10;
var i=50;
console.log(i); //50

// redfine allowed 
var x=70;
x=90;
console.log(x); //90


// 2 -  let declaration  -------------------------------------------------------------------------------------------
// let work in block space only
{
    let value; // declaration
    value = 56; // assignment
    console.log(value); // 10
}
// console.log(value);  //ERROR = value is not defined 

// reassignment allowed (updation is possible)
let a=50;
a=60;
console.log(a); //60

// javaScript is dynamic language
let c=101;
c="rohit";
console.log(c); //rohit


// redeclaration/redfine not allowed  give error
// let b=100;
// let b =150;


// 3 -  const declaration  -------------------------------------------------------------------------------------------
const PI=3.14;
console.log(PI);  //3.14

// const value cannot be changed once it is declared and cannot be re-declared
// PI=50;
// console.log(PI);        //ERROR => Assignment to constant variable.


/* -------- in js use camelCase while varialbe declaration ----------------------------------
Camel Case = firstName, lastName, numberOfDonuts
Pascal Case = FirstName, LastName, NumberOfDonuts
Snake Case = first_name, last_name, number_of_donuts
*/

// 4 -  DataTypes  -------------------------------------------------------------------------------------------

/*
primitive types = String  |  Number  | Bigint |  Boolean  | Undefined |  Null  | Symbol
Primitive data types are those data types which stores single values, are immutable, cannot be shared, do not have methods, and have default values when not assigned.
Non-Primitive Data Types = Object  | Arrays  | Function |  Date Object |  Regular Expression
*/

let numberOfMakrs=80;
console.log(numberOfMakrs); // 80

let string="Hello World";
let firsr_letter='a' // this is also string
console.log(string); // Hello World

let bigInt=458712365974513654975
console.log(bigInt); // 458712365974513654975

let boolean=true;
console.log(boolean); // true

let undefinedVariable;
console.log(undefinedVariable); // undefined=>value not provide yet

let nullVariable=null;
console.log(nullVariable); // null

console.log(typeof(numberOfMakrs)); 

// Symbols are primitive data types.
// Symbols are introduced in ES6.

let symbol1 = Symbol("id");
let symbol2 = Symbol("rohit");
console.log(symbol1 === symbol2); // false

// ------------------ Type Conversion -----



// --------------- Non-Primitive Data Types -----------------

// 1- object
let jobInfo = {
    name: "Rohit",
    location: "Mumbai"
}
console.log(jobInfo)

// 2- array
let myArray=[1,2,3,4,5];
console.log(myArray);

// 3- function
function education(degree) {
    return "i am pursuing"+degree;
}
education("master's degree");

// 4- date object
let currentDate = new Date();
console.log(currentDate);

// 5- regular expression
let pattern = /hello/;
let result2 = pattern.test("Hello, world!"); 
console.log(result2);  
 