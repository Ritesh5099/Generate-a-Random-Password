

// Path: app.js

const passwordBox = document.getElementById('password');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');

const length = 12;
const number = '0123456789';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const symbol = '!@#$%^&*()_+=';

const allChars = upperCase + lowerCase + number + symbol;

function generateRandomCharacter(characterSet) {
    return characterSet[Math.floor(Math.random() * characterSet.length)];
}

function generatePassword() {
    let password = '';

    password += generateRandomCharacter(upperCase);
    password += generateRandomCharacter(lowerCase);
    password += generateRandomCharacter(number);
    password += generateRandomCharacter(symbol);

    while (password.length < length) {
        password += generateRandomCharacter(allChars);
    }

    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
}

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);
