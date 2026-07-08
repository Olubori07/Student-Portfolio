const form = document.getElementById("contactForm");
const success = document.getElementById("successMessage");
const error = document.getElementById("errorMessage");

form.addEventListener("submit", function(event){

    event.preventDefault();

    success.style.display = "none";
    error.style.display = "none";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || phone === "" || message === ""){
        error.style.display = "block";
        error.textContent = "❌ Please complete all fields.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        error.style.display = "block";
        error.textContent = "❌ Please enter a valid email address.";
        return;
    }

    const phonePattern = /^[0-9]+$/;

    if(!phonePattern.test(phone)){
        error.style.display = "block";
        error.textContent = "❌ Phone number must contain only digits.";
        return;
    }

    success.style.display = "block";
    success.textContent = "✅ Your message has been sent successfully!";

    form.reset();

});