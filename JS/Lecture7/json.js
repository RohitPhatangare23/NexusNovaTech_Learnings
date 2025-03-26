const user = {
    name: "rohit",
    age: 25,
    isStudent: true,
    skills: ["JavaScript", "React", "Node.js"],
    address: {
      city: "Dahanu",
      zip: "401602"
    }
  };
  
  // Convert JS object to JSON string
  const jsonString = JSON.stringify(user);
  console.log(jsonString);
  

  const jsonString_New = '{"name":"Rohit","age":33,"isStudent":true,"skills":["JavaScript","React","Node.js"],"address":{"city":"dahanu","zip":"401602"}}';

  // Convert JSON string to JS object
  const jsObject = JSON.parse(jsonString_New);
  console.log(jsObject);
  