const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (e) => {
    const trimmedValue = e.target.value.trim();
    nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
