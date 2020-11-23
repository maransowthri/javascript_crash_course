const AREA = document.body;
const CIRCLE = document.querySelector(".circle");

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
  // Capture the event object (mouse movement).
  // Get X coordinate (distance from left viewport edge) via clientX property.
  // Take total window width, subtract current coordinate and width of circle.
  // Do the same for Y coordinate (distance from top viewport edge).
  var horizontalPosition = windowWidth - e.clientX - 26;
  var verticalPosition = windowHeight - e.clientY - 26;

  // Set horizontal and vertical position.
  CIRCLE.style.left = horizontalPosition + "px";
  CIRCLE.style.top = verticalPosition + "px";

  CIRCLE1.style.left = horizontalPosition + 5 + "px";
  CIRCLE1.style.top = verticalPosition + 5 + "px";
}

function changeColorOnTouch() {
  CIRCLE.style.backgroundColor = "green";
  CIRCLE.style.borderColor = "green";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener("mousemove", mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener("mouseenter", changeColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener(
  "mouseleave",
  function () {
    CIRCLE.removeAttribute("style");
  },
  false
);

const CIRCLE1 = document.querySelector(".circle1");

function changeColor(current) {
  current.style.backgroundColor = "yellow";
}

CIRCLE1.addEventListener("mouseenter", function () {
  changeColor(this);
});

CIRCLE1.addEventListener("mouseleave", () => {
  CIRCLE1.removeAttribute("style");
});
