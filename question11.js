// function stars(rows, cols) {
//     for(i=0; i<rows; i++){
//         console.log('* '.repeat(cols));
//     }
//   }
//  stars(4, 5);
// 	Create a function that displays a pattern of ones:

function displayPattern(rows) {
    for (let i = rows; i > 0; i--) {
        let rowPattern = '1 '.repeat(i).trim();
        console.log(rowPattern);
    }
}

displayPattern(4);
