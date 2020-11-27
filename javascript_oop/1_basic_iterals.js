const book1 = {
  title: "Richest Man in the Babylon",
  author: "Brad Traversy",
  year: "2013",
  getDetails: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1["title"]);
console.log(book1.getDetails());
console.log(Object.keys(book1));
console.log(Object.values(book1));
