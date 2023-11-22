// Create a function that recieves an array and return the sum of all the elements inside that array
console.log("**question5**");
function myarray(arr) {
let summ=0;
for(let i=0; i<arr.length; i++)
{
    summ =summ+arr[i];
}
console.log("the sum of array is",summ);
}

let numbers=[1,20,30,2];
myarray(numbers);