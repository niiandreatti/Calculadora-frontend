function appendToDisplay(value) {
    var display = document.getElementById('display');
    var currentValue = display.value;
    var lastChar = currentValue[currentValue.length - 1];
    var operators = ['+', '-', '*', '/', '.'];
    
    if (operators.includes(value) && operators.includes(lastChar)) {
        return;
    }
    
    if (currentValue.length >= 20) {
        return;
    }
    display.value = currentValue + value;
}

function clearDisplay() {
    document.getElementById('display').value = ''; 
}
function calculate() {
    var display = document.getElementById('display');
    var resultado = display.value;

    if (resultado) {
        try {
            display.value = eval(resultado);
        } catch(error) {
            console.error(error);
            display.value = 'Error';
        }
    }
}



