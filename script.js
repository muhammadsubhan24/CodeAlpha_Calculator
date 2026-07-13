const display = document.getElementById('display');

// Display mein value add karne ke liye
function appendValue(val) {
    if (display.value === '0' && val !== '.') {
        display.value = val;
    } else {
        display.value += val;
    }
}

// Screen clear karne ke liye
function clearDisplay() {
    display.value = '';
}

// Ek character delete karne ke liye (Backspace)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Result calculate karne ke liye
function calculate() {
    try {
        if (display.value) {
            // eval() string ko mathematical expression ki tarah calculate kar deta hai
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Keyboard Support (Bonus Feature)
document.addEventListener('keydown', (e) => {
    if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
        appendValue(e.key);
    } else if (e.key === 'Enter' || e.key === '=') {
        calculate();
    } else if (e.key === 'Backspace') {
        deleteLast();
    } else if (e.key === 'Escape') {
        clearDisplay();
    }
});