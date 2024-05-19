const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const pushOutput = () => {
    const outputText = input.value.trim();
    output.textContent = outputText ? outputText : 'Anonymous';
}

input.addEventListener('input', pushOutput);
