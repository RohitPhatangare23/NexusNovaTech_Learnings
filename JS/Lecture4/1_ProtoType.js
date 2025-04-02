// ProtoType = A javaScript object is an entity having state and behavior (properties and method).

let person = {
    name: "Rohit",
    age: 23,
    city: "Dahanu",
    greet: function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};
// this use = vahi object | this refers to the object.

/*
perfom in console
person
person.name = "Rohit
person.greet(); // Outputs: Hello, my name is Rohit and I am 23 years old.
person.xyz= undefined
*/

// Accessing properties and methods

let arr=["Rohit",55];
console.log(typeof(arr));    //array is object internaly

// JS objects have a special property called prototype.
// prototype is refrence of object

const food={
    mango(){
        console.log("i eat mango");
    },
    apple(){
        console.log("i eat apple");
    },
    orange(){
        console.log("i eat orange");
    }
}

const employee={
    name:"uday",
    mango(){
        console.log("uday eat mango more than anyones"); // same name ka function hey 
        // if object & prototype have same method then object method will be called
        // ye print hoga not i eat mango
    }
}
const employee2={
    name:"ritesh",
}
const employee3={
    name:"yuva",
}
const employee4={
    name:"nikhil",
}
// name ke andar koi food naam ka function nahi hey prototype me 
// food object ke functions ko name object me  use karne ke leye prototype use karte hey.

// object2 prototype = object1
employee.__proto__ =food;
employee2.__proto__ =food;
employee3.__proto__ =food;
employee4.__proto__ =food;

// reduce line of code