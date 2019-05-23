// 1. provide the sum of one, two, three, in order 
let one = 10;
let two = '8';
let three = 1;

let sum = one + two + three;


// ------------------------------------------


// 2. write a loop below that starts at 20 and ends at 100. Check each number,
// if the number is divisible by 3, add it to the 'threes' array.
let threes = []
for (let i = 20; i < 100; i++) {
  if (i % 3 == 0) {
    threes.push(i)
  }
}


// ------------------------------------------


// 3. write code to find the class average given the following test scores

let scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];


// let average = 0;


// code below
// function findAverage(scores) {
//   let average = 0
//   for (let i = 0; i < scores.length; i++) {
//     sum += scores[i]
//     average = sum / scores.length
//   }
//   return average
// }

let newSum = scores.reduce((previous, current) => current += previous);
let average = newSum / scores.length
