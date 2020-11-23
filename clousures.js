function doMath() {
  let a = 5;
  let b = 8;

  function multiply(params) {
    console.log("I'm inside multiply");
    return a * b;
  }

  return multiply;
}

let result = doMath();
// console.log(result);
console.log(result());
