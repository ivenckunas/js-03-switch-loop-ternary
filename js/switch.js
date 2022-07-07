//  prompt skaiciu nuo 1-3
//  jei 1 - spaudinam pirmadienis ir t.t.
//  jei nei vienas is 1-3 skaiciu, tai spausdinam klaida

// let skaicius = Number(prompt("Iveskite skaiciu nuo 1 iki 3"));

// if (skaicius === 1) {
//   alert(`Irasete ${skaicius}, tai yra - pirmadienis`);
// } else if (skaicius === 2) {
//   alert(`Irasete ${skaicius}, tai yra - antradienis`);
// } else if (skaicius === 3) {
//   alert(`Irasete ${skaicius}, tai yra - treciadienis`);
// } else {
//   alert("Klaida, ivestas neteisingas skaicius");
// }

// switch (skaicius) {
//   case 1:
//     // kai skaicius === 1
//     alert(`Irasete ${skaicius}, tai yra - pirmadienis`);
//     break;
//   case 2:
//     alert(`Irasete ${skaicius}, tai yra - antradienis`);
//     break;
//   case 3:
//     alert(`Irasete ${skaicius}, tai yra - treciadienis`);
//     break;
//   default:
//     alert("Klaida, ivestas neteisingas skaicius");
// }

let menesis = Number(prompt("Iveskite menesio skaiciu nuo 1 iki 12"));

switch (menesis) {
  case 1:
  case 2:
  case 3:
    alert("Pirmasis ketvirtis");
    break;
  case 4:
  case 5:
  case 6:
    alert("Antrasis ketvirtis");
    break;
  case 7:
  case 8:
  case 9:
    alert("Trecias ketvirtis");
    break;
  case 10:
  case 11:
  case 12:
    alert("Paskutinis metu ketvirtis");
    break;
  default:
    alert("Ivedete neteisinga skaiciu");
}
