const hexCodeElement = document.getElementById('hexcode');

const generateHexCode = () => {
    const hexCode = `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
    hexCodeElement.textContent = hexCode;
    document.body.style.background = hexCode;
}

document.getElementById('gen').onclick = generateHexCode;

document.getElementById('copy').onclick = () => {
    navigator.clipboard.writeText(hexCodeElement.textContent)
    .then(() => alert('Copy Successfully!'));
}

generateHexCode();