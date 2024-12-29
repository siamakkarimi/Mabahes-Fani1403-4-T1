
document.getElementById('output').innerText = 'Object Methods'

const person = {
  firstName: 'Siamak',
  lastName: 'Karimi',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Ali', 'Peter', 'Steven'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2024 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(person.calcAge());
console.log(person.getSummary());


