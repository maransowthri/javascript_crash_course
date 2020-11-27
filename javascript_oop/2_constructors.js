function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getDetails = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

const book1 = new Book("Book1", "Author1", 2020);
const book2 = new Book("Book2", "Author2", 2019);
console.log(book1.getDetails());
