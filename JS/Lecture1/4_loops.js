// Loops in JavaScript
// 1 -For loop
let length=5
console.log("accending order...");
for (let index = 1; index <= length; index++) {
    console.log(index);
}
console.log("decending order...");
for (let i = 5; i >= 1; i--){
    console.log(i);
}
console.log("--------------------------------");
// // 2 - While loop
let index = 1
while (index <= length) {
    console.log(index);
    index++;
}
console.log("--------------------------------");
// // 3 - Do...while loop
 let i = 9999
do {
    console.log(i);
    i++;
} while (i <= length);
console.log("--------------------------------");
// 4 - forEach loop
let arr=[15,25,35,45,55,65,85,95,100]
arr.forEach((value,index) =>{
    console.log(`value at index ${index}: ${value}`);
}
)
console.log("--------------------------------");
// 5 - For...of loop
let array = [10, 20, 30, 40, 50];
for (let value of array) {
    console.log(value);
}
console.log("--------------------------------");
// 6 - For...in loop [enumerable property object ke andar ko iterate karne ke leye ye loop use hota hey ...]
let obj = {name: "Rohit", age: 30, city: "Dahanu"};
for (let key in obj) {
    console.log(key, " ",obj[key]);
}
console.log("--------------------------------");
// break statements
for (let i = 1; i < 6; i++) {
    if (i==4) {
        break; //loop break hoga
    }
    else{
        console.log(i);
    }
    
}
console.log("--------------------------------");

// continue statements
for (let i = 1; i < 6; i++) {
    if (i==4) {
        continue; // loop continue hoga but 4 ko skip karga
    }
    else{
        console.log(i);
    }
    
}