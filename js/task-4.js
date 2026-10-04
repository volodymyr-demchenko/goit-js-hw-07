const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const values = {
        email: formData.get('email').trim(),
        password: formData.get('password').trim()
    };

    if (values.email === '' || values.password === '') {
        alert('All form fields must be filled in');
        return;
    }

    console.log(values);
    loginForm.reset();
})