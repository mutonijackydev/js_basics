// a.	Create a function to sort and arrange these elements of the array in ascending order.
// // b.	Modify the first array to make sure that it will also display the last 3 numbers and the first 3 numbers in front of the sorted array
// c.	From the same sorted array, also display the first 3 numbers.


function modiandsort(arr) {
const sortedArray = arr.slice().sort((a, b) => a - b);
    const lastThree = arr.slice(-3);
    const firstThree = arr.slice(0, 3);
    console.log("Sorted array in ascending order:", sortedArray);
    console.log("Last 3 numbers:", lastThree);
    console.log("First 3 numbers:", firstThree);
    console.log("First 3 numbers from the sorted array:", sortedArray.slice(0, 3));
}
var array = [1, 3, 4, 3, 2, 8, 0, 1, 99];

modiandsort(array);
