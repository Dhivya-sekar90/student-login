function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        document.getElementById("msg").innerHTML = "❌ Invalid Login";
    }
}

function logout() {
    document.getElementById("loginPage").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
}