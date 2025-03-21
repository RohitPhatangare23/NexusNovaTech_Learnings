/*
A] Binary operator = 2 operands use
B] unary operator  = only 1 operand use
*/

// A) Binary operator =
let a = 5;
let b = 10;
let sum = a + b;

// B) Unary operator =
let x = 10;
let y = ++x; // Increment x by 1 and assign the result to y (x++,x--,--x)

console.log(sum); // Output: 15
console.log(y); // Output: 11

// [A.1] Arithmetic operator
let n1 = 10;
let n2 =3;

console.log(n1 + n2); // Output: 13
console.log(n1 - n2); // Output: 7
console.log(n1 * n2); // Output: 30
console.log(n1 / n2); // Output: 3.333
console.log(n1 % n2); // Output: 1   remainder
console.log(n1 ** n2); // Output: 1000 (10*10*10) power

// [A.2] assignment operator

let value = 10;
value=value+5        //value+=5
// value=value-5        //value*=5
// value=value*5        //value*=5
// value=value/5        //value/=5
console.log(value); // Output: 15

// [A.3] Comparison operator

// n1=10 and n2=3
console.log(n1 > n2); // Output: true
console.log(n1 < n2); // Output: false
console.log(n1 == n2); // Output: false
console.log(n1 === n2); // Output: false
console.log(n1!= n2); // Output: true
console.log(n1!== n2); // Output: true

// [A.4] ternary operator
let age=25
let result = (age > 18)? "can vote" : "can't vote";
console.log(result); // Output: can vote

// [A.5] logical operator

let right = true;
let wrong = false;
console.log(right && right); // Output: true
console.log(wrong || wrong); // Output: false
console.log(!right); // Output: false

// [A.6] bitwise operator
// 1 is negative and 0 is positive
let num1 = 2; // 010
let num2 = 5;  // 101
console.log(num1 & num2); // 000 = 0
console.log(num1 | num2); // 111 = 7
console.log(~num1); // 101
console.log(2^2); //0         both values different then only ans true
console.log(2^5); //111 = 7        both values different then only ans true

let operand = 5; 
console.log(operand<<1); // left-shift = 10
console.log(operand>>1); // right-shift = 2

// [A.7] type conversion operator
let str = "10";
let num = Number(str);
console.log(num); // Output: 10



