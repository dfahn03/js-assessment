// 1. provide the sum of one, two, three, in order 
let one = 10;
let two = '8';
let three = 1;

let sum = one + two + three;


// ------------------------------------------


// 2. write a loop below that starts at 20 and ends at 100. Check each number,
// if the number is divisible by 3, add it to the 'threes' array.
let threes = []



// ------------------------------------------


// 3. write code to find the class average given the following test scores

let scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];


let average = 0;


// code below
debugger
function findAverage(scores) {
  let average = 0
  let d = scores.length
  for (let i = 0; i < scores.length; i++) {
    average += scores[i]
  }
  return average / d
}
