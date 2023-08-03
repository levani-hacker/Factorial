
function calculateFactorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    console.log("Factorial of " + number + " is: " + result);
}


let userInput;
let number;

while (true) {
    userInput = prompt("Enter a non-negative number to calculate its factorial:");
    number = +userInput;

    if (Number.isInteger(number) && number >= 0) {
        break;
    }
}


calculateFactorial(number);