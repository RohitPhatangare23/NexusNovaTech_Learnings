// array start from 0
let arr = ["Rohit", 10, "Yuva", "Ritesh", 20, 50, 80];
console.log(arr);

console.log(typeof arr); //object
console.log(arr.length); //7
console.log(arr[2]); //Yuva

// iterate array using for loop
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  console.log(element);
}

// --------------------------  built in method in arrays ---------------------------
// 1] Push = add element at end of array
arr.push("Shivam");
console.log(arr);

// 2] Pop = delete element from end of array
arr.pop();
console.log(arr);

// 3] Shift = delete element from start of array

arr.shift();
console.log(arr);

// 4] Unshift = add element at start of array

arr.unshift("nikhil");
console.log(arr);

// 5] Slice = get sub array

let subArr = arr.slice(2, 5);
console.log(subArr);

// 6] Splice = (insert,replace,remove at any place in array)

arr.splice(2, 0, "uday"); //index 2 to 0 step par uday add karo
console.log(arr);

arr.splice(3, 1);
console.log(arr);

// 7] Concat = combine two array

let arr2 = [null, "Mumbai"];
let combinedArr = arr.concat(arr2);
console.log(combinedArr);

// 8] Reverse = reverse the array

arr.reverse();
console.log(arr);

// 9] Sort = sort the array

arr.sort();
console.log(arr);

// 10] Map = transform each element of array
let arr3 = [1, 2, 3, 4, 5];
let mapArray = arr3.map(function (num) {
  return num * 2;
});
console.log(mapArray);

// 11] Filter = filter array based on condition
let filterArray = [10, 51, 48, 96, 35, 42, 87];
let ans = filterArray.filter((num) => {
  return num % 2 == 0;
});
console.log(ans);

// 12] Reduce = perform calculation on array (accumulator value & current value)
let reduceArray = [10, 20, 30, 40, 50];
let result = reduceArray.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(result);

// 13] Find = find element in array
let findArray = [10, 20, 30, 40, 50];
let findResult = findArray.find((num) => {
  return num == 30;
});
console.log(findResult);

// 14] indexOf = find index of element in array

let indexOfArray = [10, 20, 30, 40, 50];
console.log(indexOfArray.indexOf(30)); //2
