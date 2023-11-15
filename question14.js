// 	Create a function that displays a pattern like this:
//       1 
//     1
//   1 
// 1


function displayPattern(ones) {
    for (let i = 0; i < ones; i++) {
        let rowPattern = '';
        for (let j = 0; j < ones; j++) {
            if (j === ones - i - 1) {
                rowPattern += '1 ';
            } else {
                rowPattern += '  ';
            }
        }
        console.log(rowPattern);
    }
}

// Example usage:
displayPattern(4);
