function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return "Array is empty";
    }

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    const average = sum / numbers.length;
    return average;
}
const myNumbers = [10, 10, 10, 30, 20];
const averageValue = calculateAverage(myNumbers);
console.log("The average of the numbers is:", averageValue); 
