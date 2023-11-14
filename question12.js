function displayPattern(rows) {
    for (let i = 0; i < rows; i++) {
        let rowPattern = '1 '.repeat(rows - i) + '0 '.repeat(i);
        console.log(rowPattern.trim());
    }
}
displayPattern(4);
