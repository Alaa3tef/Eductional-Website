var password = document.getElementById("password")
, confirm_password = document.getElementById("confirm_password");

function validatePassword(){
if(password.value != confirm_password.value) {
  confirm_password.setCustomValidity("Passwords Don't Match");
} else {
  // confirm_password.setCustomValidity('');
  open(URL="http://127.0.0.1:5500/Home.html" );

}
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;