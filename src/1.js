const math = require("mathjs");

// Define the function
function solveEquation(equation) {
  const solution = math.solve(equation);
  console.log(`The solution to ${equation} is ${solution}.`);
  return solution;
}

// Test it out with a few examples
let equation1 = "2x + 5 = 9";
console.log(`The solution to ${equation1} is ${solveEquation(equation1)}.`);

let equation2 = "3x - 4 = 7";
console.log(`The solution to ${equation2} is ${solveEquation(equation2)}.`);
