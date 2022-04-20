// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "easter";

favHoliday = `Christmas`;

let newFavHoliday = favHoliday.toUpperCase();
console.log(newFavHoliday);
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

let fullName = "Kwame Obeng Yeboah";

let lastThreeCharacters = fullName.slice(-3);
console.log(lastThreeCharacters);
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function subtractAllFromFive(num1, num2, num3, num4, num5) {
  let difference = 100 - num1 - num2 - num3 - num4 - num5;
  alert(Math.abs(difference));
}
subtractAllFromFive(27, 83, 42, 1, 5);
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function compareThreeNumbers(arr1) {
  if (arr1.length === 3) {
    let highest = Math.max(...arr1);
    let lowest = Math.min(...arr1);
    console.log(highest, lowest);
  } else {
    console.log(`Number of digits must be 3`);
  }
}

compareThreeNumbers([90, 15, 3, 7, 9]);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function randomHeadsOrTails() {
  let diceRoll = Math.floor(Math.random() * 2);
  console.log(diceRoll);
  if (diceRoll === 1) {
    console.log(`heads`);
  } else if (diceRoll === 0) {
    console.log("tail");
  }
}

randomHeadsOrTails();
randomHeadsOrTails();
randomHeadsOrTails();

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
