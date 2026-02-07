function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value.trim();

    let isValid = true;

    // Clear previous errors
    document.querySelectorAll("small").forEach(e => e.innerText = "");

    // Name validation
    let namePattern = /^[A-Za-z ]+$/;
    if (name.length < 4 || !namePattern.test(name)) {
        document.getElementById("nameError").innerText =
            "Name must be more than 3 letters and contain only letters and spaces";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText =
            "Enter a valid email address";
        isValid = false;
    }

    // Strong password validation
    let passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerText =
            "Password must include uppercase, lowercase, number, special character and be at least 6 characters";
        isValid = false;
    }

    // Phone number validation
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText =
            "Phone number must be exactly 10 digits";
        isValid = false;
    }

    return isValid;
}
