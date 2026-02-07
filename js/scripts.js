document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const phone = document.getElementById("phone");

    let valid = true;

    // Clear errors
    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    // Regex
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    const phoneRegex = /^[0-9]{10}$/;

    // Name
    if (name.value.trim().length <= 3) {
        showError(name, "Name must be more than 3 letters");
        valid = false;
    } else if (!nameRegex.test(name.value)) {
        showError(name, "Only letters and spaces allowed");
        valid = false;
    }

    // Email
    if (!emailRegex.test(email.value)) {
        showError(email, "Invalid email format");
        valid = false;
    }

    // Password
    if (!passwordRegex.test(password.value)) {
        showError(password, "Password must be strong (A,a,1,@)");
        valid = false;
    }

    // Phone
    if (!phoneRegex.test(phone.value)) {
        showError(phone, "Phone number must be 10 digits");
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
        this.reset();
    }
});

function showError(input, message) {
    input.nextElementSibling.innerText = message;
}
