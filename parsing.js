/* Parsing Object */

const obj = {
  name: "Maran",
  age: 20,
  address: { state: "Tamil Nadu", country: "India" },
};

const { address } = obj;
// console.log("Address: ", address);
const { state } = address;
// console.log(("State:", state));
