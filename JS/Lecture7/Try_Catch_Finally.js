try {
    let result = 10 / 0;   // No error
    console.log(result);   // Infinity
  
    let x = y + 5;         // ReferenceError: y is not defined
    console.log(x);
  } catch (error) {
    console.log("An error occurred:", error.message); 
  }

  try {
    let num = 10;
    console.log(num / 2);  // 5
  } catch (error) {
    console.log("An error occurred:", error.message);
  } finally {
    console.log("This will always run.");
  }
  
  
  let age = 15;

try {
  if (age < 18) {
    throw new Error("You must be 18 or older.");
  }
  console.log("You are allowed.");
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Age verification completed.");
}
