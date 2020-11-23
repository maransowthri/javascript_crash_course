const ALERT_HANDLER = document.querySelector("#alert_handler");

function alertMe(e) {
  e.preventDefault();
  alert("Hello World");
}

ALERT_HANDLER.onclick = alertMe;

const ALERT_LISTENER = document.querySelector("#alert_listener");
ALERT_LISTENER.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("They clicked me!");
});
