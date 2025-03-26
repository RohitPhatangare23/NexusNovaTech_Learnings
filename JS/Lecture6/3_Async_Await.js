async function getData() {
    setTimeout(function () {
        console.log('i am inside timeout zone');
    },3000);
    console.log("first time");
}
let ouput = getData();
console.log('i am outside timeout zone');


// Async function with await keyword using fetch api method
async function getData2() {
    let response=fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    
}
getData2();

/*
scenario:
prepare url | api endpoint->synchronous
await / fetch data -> network call -> asynchronous
process data -> synchronous
*/

async function getData3() {
    // get request- asynchronous
    let response= await fetch("https://jsonplaceholder.typicode.com/posts");
  
    // parse json-asynchronous
    let data=await response.json();
    console.log(data);
    
}
getData3();
