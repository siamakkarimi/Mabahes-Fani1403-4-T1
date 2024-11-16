//برنامه ای بنویسسید که سن فرد را گرفته
// و ر صورتیکه بالای 18 باشه اعلام بکنه می تونید به امتحان رانندگی اقدام نمایید

let currentYear = prompt("What's your currentYear?")
const birthYear = prompt("What's your birthYear?")
const ageAmir = currentYear - birthYear

if (ageAmir >= 18) msg = 'Amir can get driving licence'
else msg = 'No Eligible!!!'

document.getElementById('output').innerText = msg
