// script.js
document.addEventListener("DOMContentLoaded", function () {
    const reservationForm = document.getElementById("reservation-form");

    // Add form elements dynamically here, e.g., input fields, dropdowns, etc.
    // Use JavaScript to create the form elements you mentioned.

    // Add a link back to the home page
    const homeLink = document.createElement("a");
    homeLink.href = "index.html";
    homeLink.textContent = "Back to Home Page";
    reservationForm.appendChild(homeLink);
});
