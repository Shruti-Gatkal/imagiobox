var pass = document.getElementById("pass").value;
var pass2 =
  var pass = document.getElementById("pass_con").value;
var check1 = document.getElementById("check_term");
document.getElementById("reg_btn").onclick(function() {
  alert("hii")
})

function checkPassword(pass) {
  var password = pass.value;
  if (password < 8) {
    alert("Password must contain 8 characters");
  }
}
