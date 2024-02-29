function validatePasswords() {
    const pass1 = document.querySelector('#password')
    const pass2 = document.querySelector('#conf-password')
    if (pass1.value != pass2.value) {
        pass1.style.border = 'solid 1px red'
        pass2.style.border = 'solid 1px red'
        displayPasswordIncorrect();
        return false;
    }
}

function displayPasswordIncorrect() {
    const div = document.querySelector('input + div');
    div.textContent = 'Passwords are incorrect';
}