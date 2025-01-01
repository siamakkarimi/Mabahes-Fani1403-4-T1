// const calcAge = (birthYear) => 1403 - birthYear
// const hogogDaryafti = (hogog) => hogog * 1.2
// تابعی که دستمزد و میزان درصدی افزایش یا کاهش حقوق کارمندی رو گرفته و حقوق دریافتی رو اعلام می کند
// This is arrow funcation
const FinalDastmozd = (dastmozad, kasr) => dastmozad - (dastmozad * kasr) / 100

//  input user
let dastmozad = prompt('enter datstmozd')

let kasr = prompt('enter % kasr')

//  output
document.getElementById('output').innerText = FinalDastmozd(dastmozad, kasr)

// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2024 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Karimi'));
// console.log(yearsUntilRetirement(1981, 'Bob'));
