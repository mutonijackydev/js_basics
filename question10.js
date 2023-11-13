function displayPattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let rowPattern = '';
        for (let j = 0; j < cols; j++) {
            rowPattern += '* ';
        }
        console.log(rowPattern);
    }
}


displayPattern(4, 5);
