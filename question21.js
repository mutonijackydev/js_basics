// 	Write a function that calculates the factorial of a number.
function calculateFactorial(number) {
    if (number < 0) {
        return " Factorial is defined for non-negative integers.";
    }

    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }

    return factorial;
}

// Example usage:
const result = calculateFactorial(3);
console.log("The factorial of 5 is:", result); 