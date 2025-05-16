// Function to append '00' to the display
function zeros() {
    const num = document.getElementById('display').value;

    if(num == 0) {
        const Newnum = num + '0';
    document.getElementById('display').value = Newnum;
    } else {
        const Newnum = num + '00';
        document.getElementById('display').value = Newnum;
    }
     
}

// Function to append '0' to the display
function zero() {
    const num = document.getElementById('display').value;

    if(num != 0) {
        const Newnum = num + '0';
    document.getElementById('display').value = Newnum;
    }
     
}

// Function to append '1' to the current number
function one() {
    const num = document.getElementById('display').value;
    if(num == 0) {  
    document.getElementById('display').value = 1;
    } else {
        const Newnum = num + '1';
        document.getElementById('display').value = Newnum;
    }
}

// Function to append '2' to the current number
function two() {
    const num = document.getElementById('display').value;
    if(num == 0) {  
        document.getElementById('display').value = 2;
        } else {
            const Newnum = num + '2';
            document.getElementById('display').value = Newnum;
        }
}

// Function to append '3' to the current number
function three() {
    const num = document.getElementById('display').value;
    if(num == 0) {  
        document.getElementById('display').value = 3;
        } else {
            const Newnum = num + '3';
            document.getElementById('display').value = Newnum;
        }
}

// Function to append '4' to the current number
function four() {
    const num = document.getElementById('display').value;
    if(num == 0) {  
        document.getElementById('display').value = 4;
        } else {
            const Newnum = num + '4';
            document.getElementById('display').value = Newnum;
        }
}

// Function to append '5' to the current number
function five() {
    const num = document.getElementById('display').value;
    if(num == 0) {  
        document.getElementById('display').value = 5;
        } else {
            const Newnum = num + '5';
            document.getElementById('display').value = Newnum;
        }
    }
// Function to append '6' to the current number
function six() {
    const num = document.getElementById('display').value;
    if(num == 0) {  
        document.getElementById('display').value = 6;
        } else {
            const Newnum = num + '6';
            document.getElementById('display').value = Newnum;
        }
}

// Function to append '7' to the current number
function seven() {
    const num = document.getElementById('display').value;
    if(num == 0) {  
        document.getElementById('display').value = 7;
        } else {
            const Newnum = num + '7';
            document.getElementById('display').value = Newnum;
        }
}

// Function to append '8' to the current number
function eight() {
    const num = document.getElementById('display').value;
    if(num == 0) {  
        document.getElementById('display').value = 8;
        } else {
            const Newnum = num + '8';
            document.getElementById('display').value = Newnum;
        }
}

// Function to append '9' to the current number
function nine() {
    const num = document.getElementById('display').value;
    if(num == 0) {  
        document.getElementById('display').value = 9;
        } else {
            const Newnum = num + '9';
            document.getElementById('display').value = Newnum;
        }
}

// Function to append the decimal point ('.') to the current number
function decimal() {
    const num = document.getElementById('display').value;
    if (!num.includes('.')) {
        const Newnum = num + '.';
        document.getElementById('display').value = Newnum;
    }
}

// Clear function: Resets all inputs and displays
function clearAll() {
    document.getElementById('display').value = '0';
    document.getElementById('operator').value = '';
    document.getElementById('display2').value = '';
}

// Percent function: Converts the current number in `display` to a percentage
function percent() {
    const display = document.getElementById('display');
    if (display.value !== '%') {
        display.value = parseFloat(display.value) / 100; // Convert to percentage
    }
}

// Delete function: Removes the last character from the `display`
function del() {
    const display = document.getElementById('display').value = '0';
    display.value = display.value.slice(0, -1); // Remove the last character
}


