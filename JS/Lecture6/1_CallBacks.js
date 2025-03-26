

console.log("first");
console.log("second");

function hello() {
  console.log("Hello Rohit");
}
//2sec=2000ms
setTimeout(hello, 2000); // Hello Rohit

//another way of representing
setTimeout(()=>{
    console.log("congrats!");
},4000)

console.log("third");
console.log("fourth");

// callback = A callback is a function passed as an argument to another function.

function sum(a,b) {
    console.log(a+b);
}
function calculate(a,b,sumCallback) {
    sumCallback(a,b);
}

calculate(5, 10, sum); // 15

/*
Callback Hell

Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid of Doom)
*/

function getData(dataID,getnextData) {
    setTimeout(() => {
        console.log("dataID: " + dataID);
        if (getnextData) {
            getnextData();
        }
    }, 2000);
}
// Callback Hell (nesting)
getData(1, () => {
    console.log("getting data...2");
    getData(2, () => {
        console.log("getting data...3");
        getData(3, () => {
            console.log("getting data...4");
            getData(4, () => {
                console.log("getting data...5");
                getData(5);
            });
        });
    });
});
// async await>> promise>> callback 