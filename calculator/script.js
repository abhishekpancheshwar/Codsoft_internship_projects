function addToDisplay(value) {
    document.getElementById('calc-display').value += value;
}

function clearDisplay() {
    document.getElementById('calc-display').value = '';
}

function calculate() {
    let display = document.getElementById('calc-display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}