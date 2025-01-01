// برنامه ای که یوزر و پسورد را از کاربر می گیرد و با استفاده یک تابع ارزیابی می کن در صورت صحیح بودن پیغام موفقیت آمیز داده و لاگین می شود ضمنا کاربر 3 بار فرصت ورود اطلاعات دارد
var attempt = 3 // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  var username = document.getElementById('username').value
  var password = document.getElementById('password').value
  if (username == 'siamak' && password == 'karimi123') {
    alert('Login successfully')
    window.location = 'success.html' // Redirecting to other page.
    return false
  } else {
    attempt-- // Decrementing by one.
    alert('You have left ' + attempt + ' attempt;')
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.getElementById('username').disabled = true
      document.getElementById('password').disabled = true
      document.getElementById('submit').disabled = true
      return false
    }
  }
}
