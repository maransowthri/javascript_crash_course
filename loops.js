for (var i = 0; i < 5; i++) {
  console.log("For loop Index", i);
}

var j = 0;
while (j < 5) {
  console.log("While loop index", j);
  ++j;
}

var externalLinks = document.querySelectorAll("a[href^=http]");

for (link of externalLinks) {
  console.log(link.href);
}
