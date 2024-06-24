// contact.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comments = document.getElementById('comments').value.trim();
    const rating = document.getElementById('rating').value;

    if (!name || !email || !comments) {
        document.getElementById('formMessage').textContent = 'Please fill out all fields.';
        return;
    }

    if (!validateEmail(email)) {
        document.getElementById('formMessage').textContent = 'Please enter a valid email address.';
        return;
    }

    document.getElementById('formMessage').textContent = 'Thank you for your feedback!';
    document.getElementById('contactForm').reset();
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
