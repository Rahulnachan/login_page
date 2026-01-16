function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let correctUsername = "admin";
  let correctPassword = "1234";

  if (username === correctUsername && password === correctPassword) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerText = "Login Successful!";
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerText = "Invalid Username or Password";
  }
}
