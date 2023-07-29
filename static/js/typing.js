const textElement = document.getElementById('typing-text');
const text = textElement.innerHTML;
textElement.innerHTML = '';

let index = 0;

function typeText() {
    textElement.innerHTML += text.charAt(index);
    index++;
    if (index < text.length) {
        setTimeout(typeText, 100); // Adjust the typing speed here (in milliseconds)
    }
}

typeText();
