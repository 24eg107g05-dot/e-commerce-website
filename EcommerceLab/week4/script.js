// ===================================================================
// SoleStride Shoes - Customer Registration Validation (Week 4 Lab)
// ===================================================================

document.addEventListener("DOMContentLoaded", function () {
    // Retrieve references to DOM elements
    const form = document.getElementById("registrationForm");
    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const passwordInput = document.getElementById("password");
    const addressInput = document.getElementById("address");
    const termsInput = document.getElementById("terms");
    const feedbackBox = document.getElementById("feedbackMessage");

    // Attach event listener for form submission
    form.addEventListener("submit", function (event) {
        // Prevent default submission to validate using JavaScript
        event.preventDefault();

        // Array to store any validation error messages
        const errors = [];

        // 1. Validate Full Name
        const fullName = fullNameInput.value.trim();
        if (fullName === "") {
            errors.push("Full Name is required.");
        } else if (fullName.length < 3) {
            errors.push("Full Name must be at least 3 characters long.");
        }

        // 2. Validate Email Address using regular expression
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            errors.push("Email address is required.");
        } else if (!emailRegex.test(email)) {
            errors.push("Please enter a valid email address (e.g., user@example.com).");
        }

        // 3. Validate Phone Number (must be exactly 10 digits)
        const phone = phoneInput.value.trim();
        const phoneRegex = /^[0-9]{10}$/;
        if (phone === "") {
            errors.push("Phone number is required.");
        } else if (!phoneRegex.test(phone)) {
            errors.push("Phone number must contain exactly 10 numeric digits.");
        }

        // 4. Validate Password Length (minimum 6 characters)
        const password = passwordInput.value;
        if (password === "") {
            errors.push("Password is required.");
        } else if (password.length < 6) {
            errors.push("Password must be at least 6 characters long.");
        }

        // 5. Validate Shipping Address
        const address = addressInput.value.trim();
        if (address === "") {
            errors.push("Shipping address is required.");
        } else if (address.length < 10) {
            errors.push("Please provide a complete address (minimum 10 characters).");
        }

        // 6. Check Terms of Service agreement
        if (!termsInput.checked) {
            errors.push("You must accept the Terms of Service to create an account.");
        }

        // Display results to user
        if (errors.length > 0) {
            // Display error messages in the feedback container
            feedbackBox.className = "alert alert-error";
            feedbackBox.innerHTML = "<strong>Please correct the following errors:</strong><ul>" +
                errors.map(err => `<li>${err}</li>`).join("") +
                "</ul>";
            feedbackBox.style.display = "block";
            feedbackBox.scrollIntoView({ behavior: "smooth" });
        } else {
            // Display success message
            feedbackBox.className = "alert alert-success";
            feedbackBox.innerHTML = `<strong>Registration Successful!</strong><br>Welcome to SoleStride Shoes, ${fullName}. A confirmation email has been dispatched to <em>${email}</em>.`;
            feedbackBox.style.display = "block";

            // Optional: reset the form inputs after successful submission
            form.reset();
        }
    });

    // Clear feedback message on form reset
    form.addEventListener("reset", function () {
        feedbackBox.style.display = "none";
        feedbackBox.innerHTML = "";
    });
});
