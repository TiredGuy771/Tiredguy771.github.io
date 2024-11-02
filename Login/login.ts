document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm') as HTMLFormElement;
    const errorMessage = document.getElementById('errorMessage') as HTMLParagraphElement;

    loginForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();

        const username = (document.getElementById('username') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        if (username.length < 3) {
            errorMessage.textContent = 'Username must be at least 3 characters long.';
            return;
        }

        if (password.length < 6) {
            errorMessage.textContent = 'Password must be at least 6 characters long.';
            return;
        }

        // If validation passes, you would typically send the login request to your server here
        console.log('Login attempt:', { username, password });
        errorMessage.textContent = 'Login successful! (This is a placeholder message)';
    });
});