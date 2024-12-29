const person = {
  firstName: 'Siamak',
  lastName: 'Karimi',
  age: 2024 - 1991,
  job: 'teacher',
  friends: ['Ali', 'Reza', 'Amir'],
}
person.cars = ['BMW', '206']
person.Instagram = 'IDuser'

const interestedIn = prompt(
  'What do you want to know about Karimi? Choose between firstName, lastName, age, job, cars, Insta and friends'
)

if (person[interestedIn]) {
  document.getElementById('output').innerText = person[interestedIn]
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job, and friends'
  )
}

person.location = 'Iran'
person['Instagram'] = 'Dr.karimi.blockchain'
console.log(person)

// ===========Exercise this person has 2 cars=====

// ===============================================

// console.log(person);

// console.log(person.job);
// console.log(person['lastName']);
