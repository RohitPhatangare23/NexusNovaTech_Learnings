/*
Promise =The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

-- A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.


    write asynchronous code in promise
    background me concurent task perform kar sakte hey|parrallel tasks can perform

*/

let firstPromise = new Promise((resolve,reject)=>{

    console.log("this is first promise");  //promise State=pending
    // resolve(555);  //fulfilled
    // reject(new Error("This is rejected Promise")); //rejected

    // asynchronous code
    setTimeout(()=>{
        console.log("My name is Rohit");
    },10000);
    return 1;          //prending state
    resolve(555); //fulfilled state
});

let promise1 = new Promise((resolve,reject)=>{
    let ans=true;
    if(ans){
        resolve("promise is fulfilled");
    }else{
        reject("promise is rejected");
    }
});
promise1.then((message)=>{
    console.log("This is Then message "+message);
});
promise1.catch((error)=>{
    console.log("This is catch message "+error);
});

// then chaning is possible
promise1.then((message)=>{
    console.log("This is first Then message = "+message);
    return "second message is big fullfilled";
}).then((message)=>{
    console.log("This is second Then message = "+message);
    return "Thid message is bigger fullfilled";
}).then((message)=>{
    console.log("This is third Then message ="+message);
}).catch((error)=>{
    console.log("This is last catch message = "+error);
}).finally((message)=>{
    console.log("NO matter ans is true or false finally will show output always" );
})

// Promise.all()

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"second");
});

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"third");
});

let promise4 = new Promise((resolve,reject)=>{
    setTimeout(reject,1000,"fourth");
});
Promise.all([promise2, promise3, promise4])
.then((vaules)=>{
    console.log(vaules);
}).catch((err)=>{
    console.log(err);
});