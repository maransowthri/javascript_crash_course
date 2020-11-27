class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getDetails() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  static className() {
    return "Book";
  }
}

let book1 = new Book("Wolf of wall street", "Jordan Belfort", 2020);
console.log(book1.getDetails());
console.log(Book.className());
