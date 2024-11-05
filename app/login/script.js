document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simulated login logic (replace with actual authentication in a real application)
        const loginResult = simulateLogin(username, password);

        if (loginResult.success) {
            showMessage('Login successful! Redirecting...', 'success');
            setTimeout(() => {
                redirectBasedOnRole(loginResult.role);
            }, 1500);
        } else {
            showMessage('Login failed. Please check your credentials and try again.', 'error');
        }
    });

    function simulateLogin(username, password) {
        // This is a simple simulation. In a real application, you would validate against a backend.
        const users = {
            //Bailey
            admin: { username: 'Admin', password: 'Admin123', role: 'Admin' },
            //Alex
            ElevatedUser: { username: 'EU17031', password: '897847', role: 'ElevatedUser' },
            //Will
            User: { username: 'employee', password: 'employee123', role: 'User' }
            //Test
            Trial: {username: 'T27264', password: '35391', role: 'Trial' }
        };

        for (const user of Object.values(users)) {
            if (user.username === username && user.password === password) {
                return { success: true, role: user.role };
            }
        }

        return { success: false };
    }

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = `message ${type}`;
    }

    function redirectBasedOnRole(role) {
        // In a real application, you would redirect to different URLs
        switch (role) {
            case 'Admin':
                alert('Redirecting to Admin Dashboard');
                 window.location.href = 'tiredguy771.github.io/admin-dashboard';
                break;
            case 'ElevatedUser':
                alert('Redirecting to Manager Dashboard');
                window.location.href = 'tiredguy771.github.io/elevated-dashboard';
                break;
            case 'User':
                alert('Redirecting to Employee Dashboard');
                window.location.href = 'tiredguy771.github.io/dashboard';
                break;
            default:
                alert('Unknown role. Redirecting to home page');
                // window.location.href = '/';
        }
    }
});
