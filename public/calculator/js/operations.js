
function divide() {
    display2();    
    document.getElementById('operator').value = '/';   
} 

function add() {
    display2();    
    document.getElementById('operator').value = '+';
}

function multiply() {
    display2();  
    document.getElementById('operator').value = '*';
}

function subtract() {
    display2();    
    document.getElementById('operator').value = '-';
}

function display2(newOperator) {
    const display = parseFloat(document.getElementById('display').value);
    const display2 = parseFloat(document.getElementById('display2').value);
    const operator = document.getElementById('operator').value;

    const result = display2 ? (operator === "+" ? display2 + display : 
                 operator === "-" ? display2 - display : 
                 operator === "*" ? display2 * display : 
                 operator === "/" && display !== 0 ? display2 / display : "Error") : display;
    
    document.getElementById('display2').value = result;
    document.getElementById('display').value = "0";
    document.getElementById('operator').value = newOperator;
}

function equals() {
    const num1 = document.getElementById('display2').value; 
    const num2 = document.getElementById('display').value;  
    const operator = document.getElementById('operator').value;

    let Answer;

    if (operator == '+') {
        Answer = Number(num1) + Number(num2);
    } else if (operator == '-') {
        Answer = Number(num1) - Number(num2);
    } else if (operator ==='*') {
        Answer = Number(num1) * Number(num2);
    } else if (operator ==='/') {
        if (num2 !== 0) {
           Answer = Number(num1) / Number(num2);
        } else {
            results = "Error"; 
        }
    } else {
       results = "Invalid Operation"; 
    }

    document.getElementById('display').value = Answer;
    document.getElementById('display2').value = "";
    document.getElementById('operator').value = "";
}

