// Class is a program-code template for creating objects. | blueprint | group of same properties
// bulk me similliar object create karne ke leye class use hota hey

class fruits{

    //automatically invoked by new
    constructor(name,location,calories) {
        this.name=name;
        this.location=location;
        this.calories=calories;
    }
    eat(){
        console.log(`${this.name} is eating.`);
    }
    cut(){
        console.log(`${this.name} is cutting.`);
    }
    // setlocation(location){
    //     this.location = location;
    // }
// this.location= object ki property hey
// another one comes from argument

}

let apple=new fruits("apple","kashmiri",52);
// apple.setlocation("kashmir");
console.log(apple);


let banana=new fruits("banana","vasai",30);
// banana.setlocation("vasai")
console.log(banana);

// if we do not pass any argument in constructor then it will show undefined for location
let cheku=new fruits("cheku");  //if location will not give the it will show undefined
console.log(cheku);

/*
perfrom in console
fruits
fruits.eat()
apple
apple.eat()

banana
banana.eat()


------------------------
set location. via constructor
apple.location="Mumbai"
apple

*/
