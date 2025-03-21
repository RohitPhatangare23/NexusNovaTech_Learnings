// Functions = function is block of code that performs specific operations

function name() {
    console.log("Rohit Phatangare");
}
name(); // calling the function

function counting() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
counting(); 

// Function with parameters
function number(num) {
    console.log("given number is "+num);
}

number(5); // calling the function with argument

function avg(n1,n2) {
    let average=(n1+n2)/2;
    console.log("average is "+average);
}
avg(5,11); // calling the function with arguments

// Function with return statement

function sum(n1,n2,n3) {
    let s= n1+n2+n3;
    return s;
    //console.log("Sum is "+s); // this will give error (Unreachable code)
}
let result=sum(5,11,4);
console.log("Sum is "+result);

// Decalare function in 3 ways:
// 1] Normal function
function product(a,b) {
    return a*b;
}
let first_multiplication=product(5,9); 
console.log(first_multiplication); //45

// 2] Function expression

let multiply=function(a,b){
    return a*b;
}
let second_multiplication=multiply(5,9); 
console.log(second_multiplication); //45

// 3] Arrow function
let cross=(a,b) => {
    return a*b;
}
let third_multiplication=cross(5,9);
console.log(third_multiplication); //45