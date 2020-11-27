function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getDetails = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

Book.prototype.getAge = function () {
  const date = new Date();
  return date.getFullYear() - this.year;
};

Book.prototype.setYear = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

const book1 = new Book("Book1", "Author1", 2020);
const book2 = new Book("Book2", "Author2", 2019);
// console.log(book1.getDetails());
// console.log(book2.getAge());
console.log("Old year" + book1.year);
console.log(book1.revised ? "Modified" : "Never Modified");
book1.setYear(2018);
console.log("Old year" + book1.year);
console.log(book1.revised ? "Modified" : "Never Modified");
