const validUsername = "admin";
const validPassword = "admin";

function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if(username==="admin"&& password==="admin") {
        window.location.href = "currency-converter.html";

    }
    else {
        message.textContent = "Login failed.";
        message.style.color = "red";
    }
}

function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("message").textContent = "";
}
