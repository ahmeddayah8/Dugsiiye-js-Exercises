// Exercise for callback

function operate (a, b, callback) {
    return callback(a, b)
}

function add (a, b){

    return (a + b)
}

function subtract (a, b){

    return (a - b)
}

function multiply (a, b){

    return (a * b)
}

function divide (a, b){

    return (a / b)
}

console.log("addition", operate(100, 50, add));
console.log("subtract", operate(30, 15, subtract));
console.log("multiply", operate(9, 9, multiply));
console.log("divide", operate(100, 4, divide));