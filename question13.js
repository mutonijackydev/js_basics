function displayPattern(size) {
    for (let i = 0; i < size; i++) {
        let rowPattern = '';
        for (let j = 0; j < size; j++) {
            if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
                rowPattern += '1 ';
            } else {
                rowPattern += '0 ';
            }
        }
        console.log(rowPattern.trim());
    }
}

// Example usage:
displayPattern(5);
