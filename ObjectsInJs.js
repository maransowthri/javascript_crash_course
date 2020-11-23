let course = new Object();
course.title = "JavaScript Training";
// console.log(course["duration"] ? "Exists" : "Undefined");
course["wp:duration"] = "40Hrs";
// console.log(course["duration"] ? "Exists" : "Undefined");
// console.log(course["wp.duration"]);
console.log(course);
// course.duration = "40Hrs";
// console.log(course);

function Studedent(name, age) {
  this.name = name;
  this.age = age;

  this.getDetails = function () {
    return `${this.name} is ${age} years old`;
  };
}

let student1 = new Studedent("Maran", 21);
let student2 = new Studedent("Karan", 25);
// console.log([student1, student2]);

let Course = (title, duration) => ({
  title,
  duration,
  getDetails: function () {
    return `Title: ${this.title}, Duration: ${this.duration}`;
  },
});
let course1 = Course("Javascript Training", "40Hrs");
// console.log(course1.getDetails());
