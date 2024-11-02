document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');
    var errorMessage = document.getElementById('errorMessage');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if (username.length < 3) {
            errorMessage.textContent = 'Username must be at least 3 characters long.';
            return;
        }
        if (password.length < 6) {
            errorMessage.textContent = 'Password must be at least 6 characters long.';
            return;
        }
        // If validation passes, you would typically send the login request to your server here
        console.log('Login attempt:', { username: username, password: password });
        errorMessage.textContent = 'Login successful! (This is a placeholder message)';
    });
});
