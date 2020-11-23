/* Arrow functions*/
let findGreatest = (a, b) =>
  a > b ? "a is greater" : a < b ? "b is greater" : "both are equal";

/* Difference Between '(' & '{' in arrow functions */
const findSum = (a, b) => ({ a, b, sum: a + b });

// console.log(findSum(5, 7));
// console.log(typeof findGreatest);

/* Imediately invoked functions */
let plusOne = (function (a) {
  return a + 1;
})(6);
console.log(plusOne);
