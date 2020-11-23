let student = {
  name: "Maran",
  standard: "10th",
  getDetails: function () {
    return `His name is ${this.name} and he is studying ${this.standard} standard`;
  },
};

console.log(student.getDetails());
