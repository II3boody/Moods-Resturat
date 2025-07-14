document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const msg = document.getElementById('form-message');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const name = form.username.value.trim();
        const email = form.email.value.trim();
        const location = form.location.value.trim();
        const pwd = form.password.value;
        const pwd2 = form.password2.value;

        if (!name || !email || !location || !pwd || !pwd2) {
            return showMessage('Please fill all fields.');
        }
        if (pwd !== pwd2) {
            return showMessage('Passwords do not match.');
        }

        const users = JSON.parse(localStorage.getItem('restaurantUsers') || '[]');
        if (users.some(u => u.email === email)) {
            return showMessage('Email already registered.');
        }

        users.push({ name, email, location, password: pwd });
        localStorage.setItem('restaurantUsers', JSON.stringify(users));

        localStorage.setItem('loggedInUserName', name);

        window.location.href = 'home.html';
    });

    function showMessage(text, clr = 'red') {
        msg.textContent = text;
        msg.style.color = clr;
    }
});