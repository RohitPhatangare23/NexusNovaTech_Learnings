// Rest Parameter And Spread Operator in JavaScript

let arr=[5,4,9,3,7,5];
// let a=arr[0];
// let b=arr[1];     //this is not used

let [a,b]=arr;
console.log(a,b); //destructuring 


// Rest
let array=[1,5,9,6,3,4,8,7,5];
let [first,...rest]=array;
console.log(first,rest); //first element and rest of the array

let [x,,,y,...rest1]=array;

console.log(x,y,rest1); //x=1, y=6, rest1=[3,4,8,7,5]

//Spread

let array1=[10,20,30,40];
let obj={...array1};

console.log(obj); //{ '0': 10, '1': 20, '2': 30, '3': 40 } --------------------------

function sum(n1,n2,n3,n4) {
    return n1+n2+n3+n4;
}
console.log(sum(...array1)); //100---------------------------------------


let array2=[1,2,3];
let array3=[4,5,6];

let combinedArray=[...array2,...array3];
console.log(combinedArray); //[1,2,3,4,5,6]--------------------------------------

// in react
let obj2={
    name:'Rohit',
    age:23,
    city:'Mumbai'
}
console.log({...obj2,name:"Uday"}); //spread write first then updation condition write later
