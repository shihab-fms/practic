// "use strict";

// const minute = document.querySelector(".minute");
// const second = document.querySelector(".second");
// const hour = document.querySelector(".hour");

// // console.log(minute, second, hour)

// const setRotation = function (element, rotationRatio) {
//   element.style.setProperty("--rotation", rotationRatio * 360);
// };

// const setclock = function () {
//   const currentDate = new Date();

//   const secondRatio = currentDate.getSeconds() / 60;
//   // console.log(secondRatio);
//   const minuteRatio = (currentDate.getMinutes() + secondRatio) / 60;
//   // console.log(minuteRatio)
//   const hourRatio = (currentDate.getHours() + minuteRatio) / 12;
//   // console.log(hourRatio)

//   setRotation(second, secondRatio)
//   setRotation(minute, minuteRatio)
//   setRotation(hour, hourRatio)
// };

// setInterval(setclock, 1000);

"use strict";

const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

const setRotationRation = (element, rotationRatio) =>
  element.style.setProperty("--rotation", rotationRatio * 360);

const setclock = function () {
  const currentDate = new Date();

  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (currentDate.getMinutes() + secondRatio) / 60;
  const hourRatio = (currentDate.getHours() + minuteRatio) / 12;

  setRotationRation(secondHand, secondRatio);
  setRotationRation(minuteHand, minuteRatio);
  setRotationRation(hourHand, hourRatio);
};

setInterval(setclock, 1000);
