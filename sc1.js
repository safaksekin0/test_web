function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  if (user === "svlycgr" && pass === "240424") {
    window.location.href = "dashboard.html";
  } else {
    // Show styled error instead of alert
    if (errorMsg) {
      errorMsg.classList.remove("show");
      void errorMsg.offsetWidth; // reflow to re-trigger animation
      errorMsg.classList.add("show");
    }
  }
}