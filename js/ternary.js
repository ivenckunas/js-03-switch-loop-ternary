"use strict";

// salyga ? <jei salyga true> : <jei salyga false>

// let hours = 3;

// let laikas = hours < 6 ? "yra naktis" : "yra diena";
// console.log("laikas ===", laikas);

// let laikas;

// if (hours < 6) {
//   laikas = "yra naktis";
// } else {
//   laikas = "yra diena";
// }

// console.log("laikas ===", laikas);

let isDarkModeOn = true;
const darkColor = "#333";
const lightColor = "#f3f3f3";

// isDarkModeOn = true;

// if (isDarkModeOn === true) {
//   document.body.style.backgroundColor = darkColor;
// } else {
//   document.body.style.backgroundColor = lightColor;
// }

document.body.style.backgroundColor = isDarkModeOn ? darkColor : lightColor;
