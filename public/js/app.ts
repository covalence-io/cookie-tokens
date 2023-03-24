(function () {
    const request = <HTMLButtonElement>document.getElementById('request');
    const tkRequest = <HTMLButtonElement>document.getElementById('token-request');
    const login = <HTMLButtonElement>document.getElementById('login');
    const logout = <HTMLButtonElement>document.getElementById('logout');

    request.addEventListener('click', async () => {
        const res = await fetch('/api/v1/users');

        if (res.ok) {
            const user = await res.json();
            alert(`Hello ${user.firstname} ${user.lastname}`);
        } else {
            alert('Unauthorized :(');
        }
    });

    tkRequest.addEventListener('click', async () => {
        const res = await fetch('/api/v1/users', {
            headers: {
                Authorization: 'Bearer test'
            },
        });

        if (res.ok) {
            const user = await res.json();
            alert(`Hello ${user.firstname} ${user.lastname}`);
        } else {
            alert('Unauthorized :(');
        }
    });

    login.addEventListener('click', async () => {
        const res = await fetch('/api/v1/users/login');

        if (res.ok) {
            alert('Logged in');
        } else {
            alert('Error');
        }
    });

    logout.addEventListener('click', async () => {
        const res = await fetch('/api/v1/users/logout');

        if (res.ok) {
            alert('Logged out');
        } else {
            alert('Error');
        }
    });
})();