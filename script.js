let display = document.getElementById("display");

function appendNumber(num) {
    display.value += num;
}

function performOperation(op) {
    display.value += op;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}