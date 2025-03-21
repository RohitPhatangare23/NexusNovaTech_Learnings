// Optional Chaining, Nullish Coalescing  operator.

const person = {
    name: 'Rohit',
    age: 25,
    address: {
        city: 'Dahanu',
        country: 'India'
    },
};

// console.log(person.address.city);  // 'Dahanu
// console.log(person.contact.phone);   //Cannot read properties of undefined (reading 'phone')

// Optional Chaining ? => undefined,null

console.log(person.address.city);
console.log(person.contact?.phone);

// Nullish Coalescing ?? => handle (undefined,null)

let user={
    name: 'Yuva',
    age: 30,
    Degree:"MCA",
    preference:null
}

let getMarks=person.preference?.marks?? 95;
console.log(getMarks); // 95