//==Ravesh1-> Function declaration
// function calcAge1(birthYeah) {
//   return 1403 - birthYeah;
// }
// const age = calcAge1(1365);

function mohasebeHogogAfzayeshi(hogog) {
  return hogog * 1.2
}
const hogogDaryafti = mohasebeHogogAfzayeshi(1000000)

document.getElementById('output1').innerText = hogogDaryafti

// ==Ravesh2->Function expression
// const calcAge2 = function (birthYeah) {
//   return 1403 - birthYeah;
// }
// const age2 = calcAge2(1366);
// document.getElementById('output2').innerText = age2

// function logger(name, family) {
//   console.log(`Welcome ${name} ${family}`)
// }

// logger('siamak', 'sadatpor')
// logger('mamad', 'imani')
// logger('farzin', 'fazaneh')
// logger('mobina', 'omrani')

// ======Solution 1
// function logger(name, family) {
//   msg = `Welcome ${name} ${family}`
//   return msg
// }
// logger('siamak', 'sadatpor')
// document.getElementById('output').innerText = msg

// ======Solution 2=====GOOD
// function logger(name, family) {
//   return `Welcome ${name} ${family}`
// }
// document.getElementById('output').innerText = logger('siamak', 'sadatpor')
// ================================================
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');

//=======================================

// Function expression
//   const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
//   }
//   const age2 = calcAge2(1991);

//   console.log(age1, age2);
