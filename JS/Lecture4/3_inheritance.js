// inheritance is passing down properties & methods from parent class to child class.
// tyr to reduce line of code
class parentClass{
    home() {
        console.log("parent have home");
    }
}
class childClass extends parentClass{

}

let obj = new childClass();

console.log(obj.home());  //give o/p
// console.log(obj.xyz()); //error message =obj.xyz is not a function


class Person{
    constructor(name){
        console.log("Enter parent constructor");
        this.name = name;
    }
    eat(){
        console.log("Person eats");
    }
    sleep(){
        console.log("Person sleeps");
    }
    work(){
        console.log("Person works in office");
    }
}

class Engineer extends Person{
    work(){
        console.log("Engineer works on fields");
    }
}
class Doctor extends Person{
    work(){
        console.log("Doctor works in Hospitals");
    }
}
let Uday=new Person("Uday");
let Rohit = new Engineer("Rohit");
/*
*If Child & Parent have same method, child’s
method will be used. [Method Overriding]
*/

Rohit.eat(); // Person eats
Rohit.sleep(); // Person sleeps
Rohit.work(); // Engineer works on fields  | Child class ka function invoke hoga

// let Yuva = new Doctor();

// super Keyword-The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
// child class se parent class ko info send karan rahe ga to super keyword ke through send hote hey
class Actor extends Person{
    constructor(name, role){
        console.log("Enter child constructor");
    
        super(name);    //used to call the constructor of its parent class
        this.role = role;
        console.log("exit child constructor");
    }
    work(){
        super.eat(); //used to call the parent's method
        console.log("Actor works in movie");
    }
}

let Kamal = new Actor("Kamal", "king");

// child=>parent=>child(constructor)
console.log(Kamal.work());
