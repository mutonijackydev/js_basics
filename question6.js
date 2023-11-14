console.log("**question 6");
function findMaxValue(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let maxValue = arr[0]; //here i have to Assume the first element is the maximum

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i]; // Update maxValue if a greater value is found
        }
    }

    return maxValue;
}


const numbers = [10, 5, 20, 8, 15];
const max = findMaxValue(numbers);
console.log("The greatest value in the array is:", max); 
