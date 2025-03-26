// function decalration shift top in their sope
// hoisting with function
name("Rohit");

function name(name) {
    console.log("Hello", name);
}
// hoisting with var
console.log(age);
var age = 23;  //undefined

// hoisting with let,const
console.log(location); // ReferenceError: Cannot access 'location' before initialization
let location="Dahanu";  //same with const


// hoisting with class
let obj=new info();  //ReferenceError: Cannot access 'info' before initialization
class info{

}

