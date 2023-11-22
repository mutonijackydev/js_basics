// // function maths(num1,num2)
// // {
// //     let answerr=num2+num1
// //     console.log("the sum of two numbers is",answerr);
// // }
// // maths(20,0);


// // function prod(pro1,pro2)
// // {
// //     let res=pro1*pro2;
// //     console.log("the product of two numbers is ",res);
// // }
// // prod(50,50);

// // function minus(minu1,minu2)
// // {
// //     let minuss=minu1-minu2;
// //     console.log("the diffrence of two numbers is",minuss);
// // }
// // minus(20,50);
// // function divid(di1,did2)
// // {
// //     let result=di1/did2;
// //     console.log("this is the divion of two numbers",result);
// // }
// // divid(70,10);
// // function addarray(array)
// // {
// //     let sum=0;
// //     for(let i=0; i<array.length;i++)
// //         {
// // sum=sum+array[i];
// //         }
// // console.log("the sum of array is ",sum);
// // }
// // let items=[2,1,2,1];
// // addarray(items);
function divid(divi)
{
    let divd=0;
    let result;
    for(let i=0; i<divi.length; i++)
    {
        divd=divd+divi[i];
       result =divd/divi.length;
    }
    console.log ("this is the average of array",result);
}
let numbers=[10,4];
divid(numbers);
// // function average(numbers)
// // {
// //     let sum;
// //     let average;
// //     for(let i=0; i<numbers.length;i++)
// //     {
// //         sum=sum+numbers[i];
// //         average=sum/numbers.length;
// //     }
// //     console.log("the average of numbers is ", average);
// // }
// // let to=(4,4,4,4);
// // average(to);
// function calculator(num1, num2, operator) {
//     let result;
  
//     switch (operator) {
//       case '+':
//         result = num1 + num2;
//         break;
//       case '-':
//         result = num1 - num2;
//         break;
//       case '*':
//         result = num1 * num2;
//         break;
//       case '/':
//         if (num2 !== 0) {
//           result = num1 / num2;
//         } else {
//           console.log("Cannot divide by zero");
//           result = undefined;
//         }
//         break;
//       default:
//         console.log("Invalid operator");
//         result = undefined;
//         break;
//     }
  
//     return result;
//   }
  
//   // Example usage:
//   const number1 = 10;
//   const number2 = 5;
//   const operation = '+';
  
//   const result = calculator(number1, number2, operation);
//   console.log(`Result: ${result}`);
  

// // function sliceArray(arr, start, end) {
// //   return arr.slice(start, end);
// //   }
  
// //   const numbers = [1, 2, 3, 4, 5];
// //   const result=sliceArray(numbers, 1, 4);

// //   console.log(result);  

  