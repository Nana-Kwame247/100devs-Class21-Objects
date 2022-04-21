//Arrays

//Create and array of tv shows. Loop through and print each show to the console

//tv show list
let tvShowList = [
  "Arrow",
  "End Game",
  "Touch By An Angel",
  "Flash",
  "Supergirl",
];

//looping through it with a forEach

tvShowList.forEach((x, i) => console.log(x));

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

let nums = [21, 45, 66, 90, 50, 30];

let onlyEvens = (arr) => arr.filter((n) => n % 2 === 0);

console.log(onlyEvens(nums));

// nums.forEach((nums, i) =>
//   nums % 2 === 0 ? console.log(nums):
// )

// creating an array of numbers

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function sumSecondLowestAndHighest(arr) {
  let sorted = arr.sort((a, b) => a - b);
  console.log(sorted);
  alert(sorted[1] + sorted[sorted.length - 2]);
}

sumSecondLowestAndHighest([2, 3, 1, 5, 4]);
