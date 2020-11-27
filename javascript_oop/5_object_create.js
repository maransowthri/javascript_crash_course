const prototypes = {
  getDetails: function () {
    return `${this.title} is written by ${this.author} in ${this.year}`;
  },
  getAge: function () {
    const date = new Date();
    return date.getFullYear() - this.year;
  },
};

// book1 = Object.create(prototypes);
// book1.title = "Wolf of wall street";
// book1.year = 2020;
// book1.author = "Jordan Belfort";
// console.log(book1.getDetails());

book1 = Object.create(prototypes, {
  title: { value: "Wolf of wall street" },
  year: { value: 2020 },
  autho: { value: "Jordan Belfort" },
});

console.log(book1.getDetails());
