// 1] Fetch API = promise return karata hey,req and response use karata hey
const url="https://jsonplaceholder.typicode.com/users";
const getfacts=async()=>{
    console.log("get data");
    let response=await fetch(url)
    // console.log(response);
    
    let data=await response.json();
    console.log(data);
};

getfacts()