# Week 4 — Applying JavaScript to the Registration Form

## Aim
To implement client-side form validation using JavaScript (`script.js`) on the customer registration page (`register.html`), ensuring data integrity before form submission.

## Files Created
- `register.html`: Customer registration form with styled inputs and an alert feedback banner.
- `script.js`: Client-side JavaScript file implementing:
  - `event.preventDefault()` to stop default page reload on submission.
  - Required field validations (Full Name, Email, Phone, Password, Address, Terms).
  - Regular expressions for email format and 10-digit phone number.
  - Password minimum length verification (&ge; 6 characters).
  - Dynamic display of error list or success banner without page reload.

## Prerequisites
- Modern web browser.

## How to Run / Test
1. Open `EcommerceLab/week4/register.html` in your browser.
2. Click **Submit Registration** immediately with empty fields.
   - **Observation**: A red alert box displays with a list of missing fields.
3. Type an invalid email (e.g., `user@abc`) and a 3-character password.
   - **Observation**: Specific error messages warn about email format and password length.
4. Fill in all details properly, accept terms, and click **Submit Registration**.
   - **Observation**: A green success message appears with the customer's name and email confirmation.

## Expected Output
- Interactive client-side feedback showing either a styled red error summary box or a green success confirmation banner upon validation.
