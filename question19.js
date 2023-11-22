function countCharacters(inputString) {
    // here i'm going to remove spaces from the input string
    const stringWithoutSpaces = inputString.replace(/\s/g, '');
  
    // Count the number of characters in the modified string
    const numberOfCharacters = stringWithoutSpaces.length;
  
    return numberOfCharacters;
  }
  const inputString = "Hello World";
  const numberOfCharacters = countCharacters(inputString);
  console.log(`The number of characters is: ${numberOfCharacters}`);
  