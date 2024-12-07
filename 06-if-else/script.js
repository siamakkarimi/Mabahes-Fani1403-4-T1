fName = prompt("What's your Name?")
let currentYear = prompt("What's your currentYear?")
const BirthedayYear = prompt("What's your birthYear?")
const age = currentYear - BirthedayYear

// if (age >= 18) {
//   console.log('Sarah can start driving license 🚗')
// } else {
//   const yearsLeft = 18 - age
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
// }

if (age >= 18) {
  msg = `${fName} can start driving license 🚗`
} else {
  const yearsLeft = 18 - age
  msg = `${fName} is too young. Wait another ${yearsLeft} years :)`
}
document.getElementById('output').innerText = msg
