// . Create a function that recieves an array and returns the smallest number from that array
console.log("**question 6");
function findMinValue(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let minValue = arr[0]; //here i have to Assume the first element is the maximum

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i]; // Updating
        }
    }

    return minValue;
}


const numbers = [10, 5, 20, 8, 15];
const min = findMinValue(numbers);
console.log("The smallest value in the array is:", min); 