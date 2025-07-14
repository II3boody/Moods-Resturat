document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signin-form');
    const msg = document.getElementById('signin-message');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const email = form.email.value.trim();
        const pwd = form.password.value;

        if (!email || !pwd) {
            return showMessage('Please enter both email and password.');
        }

        const users = JSON.parse(localStorage.getItem('restaurantUsers') || '[]');
        const user = users.find(u => u.email === email && u.password === pwd);

        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            showMessage('Signed in successfully!', 'green');
            setTimeout(() => {
                window.location.href = 'profile.html';
            }, 800);
        } else {
            showMessage('Invalid email or password.');
        }
    });

    function showMessage(txt, clr = 'red') {
        msg.textContent = txt;
        msg.style.color = clr;
    }
});
