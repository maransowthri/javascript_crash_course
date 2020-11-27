class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getDetails() {
    return `${this.title} written by ${this.author} in ${this.year}`;
  }
}

book1 = new Book("Wolf of wall street", "Jordan Belfort", 2020);
console.log(book1);

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

magazine1 = new Magazine("Wolf of wall street", "Jordan Belfort", 2020, "Jan");
console.log(magazine1.getDetails());
