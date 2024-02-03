function generatePassword() {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const special = document.getElementById('special').checked;

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?';

    let validChars = lowercaseChars;

    if (uppercase) {
        validChars += uppercaseChars;
    }
    if (numbers) {
        validChars += numberChars;
    }
    if (special) {
        validChars += specialChars;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars.charAt(randomIndex);
    }

    document.getElementById('password-label').textContent = "Your password:";
    document.getElementById('password').textContent = password;
    document.getElementById('clipboard-label').textContent = "Click to copy !";

}

function updateSliderValue() {
    const slider = document.getElementById('length');
    const valueDisplay = document.getElementById('length-value');
    valueDisplay.textContent = slider.value;
}

function copyToClipboard() {
    const passwordText = document.getElementById('password').textContent;

    if (passwordText) {
        const textarea = document.createElement('textarea');
        textarea.value = passwordText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        document.getElementById('clipboard-label').textContent = "Copied !";
    }
}