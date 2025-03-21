// String is immutable it's can't change. , string is seq of character
// in string index strat from 0
let firstName="Rohit";
let lastName="Phatangare";

// ---------- operations/methods in String -------------

let fullName=firstName+" "+lastName;
console.log(fullName);

console.log(`my name is ${fullName}`);

console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

console.log(lastName.substring(2,5));  // 5 is exlusive

console.log(firstName.length);
console.log(firstName.indexOf("i"));


console.log(firstName.charAt(2)); 

const sentesnse="My name is rohit i am web developer";
let words=sentesnse.split(" ");
console.log(words);
console.log(words.includes("rohit"));
console.log(words.join());  // default comma seperated
console.log(words.join("_"));












