const HOUR_HAND = document.querySelector("#hour");
const MINUTE_HAND = document.querySelector("#minute");
const SECOND_HAND = document.querySelector("#second");

let date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let hrPos = hr * 30 + (min * 6) / 12;
let minPos = min * 6 + (sec * 6) / 60;
let secPos = sec * 6;

setInterval(() => {
  hrPos = hrPos + 6 / 3600;
  minPos = minPos + 6 / 60;
  secPos = secPos + 6;
  HOUR_HAND.style.transform = `rotate(${hrPos}deg)`;
  MINUTE_HAND.style.transform = `rotate(${minPos}deg)`;
  SECOND_HAND.style.transform = `rotate(${secPos}deg)`;
}, 1000);
