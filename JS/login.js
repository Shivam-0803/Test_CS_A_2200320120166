function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Basic validation: Username and password must not be empty
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required.";
        return false;
    }
    
    // Password length check
    if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters.";
        return false;
    }

    // Login successful
    alert("Login successful!");

    // Redirect to currency converter page
    window.location.href = "HTML/currency-converter.html"; 
    return true;
}
