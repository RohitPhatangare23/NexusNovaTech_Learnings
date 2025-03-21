let info={
    name: "Rohit",
    age: 30,
    city: "Mumbai",
    address: {
        street: "123 Main St",
        city: "Borivali",
        state: "Maharashtra",
        zip: "401602"
    }
}
//object properties using dot notation

console.log(info.name); // Rohit
console.log(info.address.city); // Borivali  (Accessing nested object properties using dot notation)

//  object properties using bracket notation
console.log(info['name']); // Rohit
console.log(info['address']['city']); // Borivali

let Degree={
    name: "MCA",
    duration: 2,
    degreeType: "Computer Science",
    university: "Mumbai University",
    college:"Hiray college",
    loc:"bandra"
}

console.log(Degree.name); // MCA
Degree.currentSem=1;        //Adding a new property
Degree.college="Late Bhausaheb s s Hiray College"  // Modifying an existing property
console.log(Degree);

delete Degree.loc;
console.log(Degree); // Deleting a property using delete keyword

console.log("name"in Degree); //Checking Property Existence

// Iterate object properties               
const myObject = { name: "Rohit", age: 23 };
const keys = Object.keys(myObject);               //or Object.entries() / for in / for of
for (const key of keys) {
  console.log(`this is my ${key}: ${myObject[key]}`); 
}