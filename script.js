
let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let operand1 = null;
let memory = 0;

function input(char) {
    if (['+', '-', '*', '/'].includes(char)) {
        if (currentInput !== '') {
            operand1 = parseFloat(currentInput);
            currentInput = '';
        }
        operator = char;
    } else {
        currentInput += char;
        display.innerText = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    operand1 = null;
    display.innerText = '0';
}

function calculate() {
    if (operand1 !== null && operator !== null && currentInput !== '') {
        let operand2 = parseFloat(currentInput);
        let result = 0;
        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
        }
        display.innerText = result;
        currentInput = result.toString();
        operand1 = null;
        operator = null;
    }
}

function applyGST(percentage) {
    if (currentInput !== '') {
        let amount = parseFloat(currentInput);
        let gstAmount = amount * (percentage / 100);
        let total = amount + gstAmount;
        display.innerText = total;
        currentInput = total.toString();
    }
}

function memoryAdd() {
    if (currentInput !== '') {
        memory += parseFloat(currentInput);
    }
}

function memorySubtract() {
    if (currentInput !== '') {
        memory -= parseFloat(currentInput);
    }
}

function memoryRecall() {
    display.innerText = memory.toString();
    currentInput = memory.toString();
}

function memoryClear() {
    memory = 0;
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.') {
        input(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        input(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'C') {
        clearDisplay();
    } else if (key === 'M') {
        memoryRecall();
    } else if (key === 'm') {
        memoryClear();
    } else if (key === 'a') {
        memoryAdd();
    } else if (key === 's') {
        memorySubtract();
    }
});
