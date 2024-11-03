document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    // Simulated user database
    const users = [
        { username: 'user1', passwordHash: '$2a$10$XQq1VZfOeiLxpKj7CbQmDuPvmTUGZMVCOGZALT4wWvC6jDNdqzMXu', role: 'user' },
        { username: 'user2', passwordHash: '$2a$10$XQq1VZfOeiLxpKj7CbQmDuPvmTUGZMVCOGZALT4wWvC6jDNdqzMXu', role: 'user' },
        { username: 'admin', passwordHash: '$2y$10$fMMDNl0p5NUmCrfReZG22.2Ajjt.8R/Vk5gNR/8LriL2eYIN4ADTW', role: 'admin' }
    ];

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        errorMessage.textContent = '';

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username.length < 3) {
            errorMessage.textContent = 'Username must be at least 3 characters long.';
            return;
        }

        if (password.length < 6) {
            errorMessage.textContent = 'Password must be at least 6 characters long.';
            return;
        }

        const user = users.find(u => u.username === username);

        if (user) {
            // In a real application, you would never do this client-side!
            // This is just for demonstration purposes.
            if (password === 'password') { // All users have the same password for this demo
                let redirectUrl = 'https://tiredguy771.github.io/dashboard/index.html';
                if (user.role === 'admin') {
                    redirectUrl = 'https://tiredguy771.github.io/admin-dashboard/index.html';
                }
                window.location.href = redirectUrl;
            } else {
                errorMessage.textContent = 'Invalid username or password';
            }
        } else {
            errorMessage.textContent = 'Invalid username or password';
        }
    });
});
