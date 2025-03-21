// date 

// month index start from 0
let currDate=new Date();
console.log(currDate);

let newDate=new Date("2029-09-23"); //set new date
console.log(newDate);

// (set new date syntax=)let newDate=new Date(year,month,date,hour,min,sec,millisec);

// get year,month,date,time

let date=currDate.getDate()
console.log("todays date "+ date);


let month=currDate.getMonth()
console.log("current month "+ month);


let year=currDate.getFullYear()
console.log("current year  "+ year);


let hours=currDate.getHours()
console.log("current hour  "+ hours);

console.log(Date.now()); // program run hue kitna time hua hey vha batayega
