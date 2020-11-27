function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getDetails = function () {
  return `${this.title} is written by ${this.author} in ${this.year}`;
};

Book.prototype.setYear = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);
Magazine.prototype.constructor = Magazine;

book1 = new Book("Wolf of wall street", "Jordan Belfort", 2015);
magazine1 = new Magazine("Wolf of wall street", "Jordan Belfort", 2015, "Jan");
console.log(magazine1);
