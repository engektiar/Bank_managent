const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const tranjsonArea = document.getElementById("tranjsaon-area");
  tranjsonArea.style.display = "block";
});
