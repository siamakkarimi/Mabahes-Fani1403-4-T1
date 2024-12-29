firstName = prompt("What's your Name?")
lastName = prompt("What's your Lastname?")
let currentYear = prompt("What's your currentYear?")
const BirthedayYear = prompt("What's your birthYear?")
const age = currentYear - BirthedayYear

// let msg =
//   'fisrt name is: ' +
//   firstName +
//   ', last name is: ' +
//   lastName +
//   ' and ' +
//   age +
//   ' years old'
let msg = `First name is ${firstName} and last name is ${lastName} and ${
  currentYear - BirthedayYear
} old years`

document.getElementById('output').innerText = msg
