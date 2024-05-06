let passwordInput = document.querySelector("#password");
let logIn_button = document.querySelector(".logIn_button");
let showPassword = document.getElementById("Showpassword");

showPassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPassword.style.color = "red";
  } else {
    passwordInput.type = "password";
    showPassword.style.color = "black";
  }
});

logIn_button.addEventListener("click", () => {
  let inputEmail = document.getElementById("email").value.trim();
  let inputPassword = passwordInput.value.trim();

  if (inputEmail === "todo@123.com" && inputPassword === "12345") {
    // alert('Successful Login');
    window.location.href = "../SuccessLogin/loginSuccess.html";
  } else if (inputEmail !== "todo@123.com") {
    console.log("Email is not correct");
    alert(`Not Valid Email: ${inputEmail}`);
  } else if (inputPassword !== "12345") {
    console.log("Password is not correct");
    alert(`Not Valid Password: ${inputPassword}`);
  }
});
