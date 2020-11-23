/* Variable Scope */
let a = 5;
function changeMe() {
  a = 0;
  a++;
  // console.log("Local", a);
}

changeMe();
// console.log("Global", a);

function modifyMe() {
  let myVar = 5;
  if (myVar) {
    var myVar = 6;
    console.log("myVar inside condition", myVar);
  }
  console.log("myVar inside function", myVar);
}

modifyMe();
