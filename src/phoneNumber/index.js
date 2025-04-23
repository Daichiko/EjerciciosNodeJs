const { createPhoneNumber } = require("./phoneNumber.js"); // Asegúrate de incluir la extensión .js

// Example usage:
const phoneNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const formattedPhoneNumber = createPhoneNumber(phoneNumberArray);
console.log(formattedPhoneNumber); // Output: (123) 456-7890

const invalidArrayLength = [1, 2, 3, 4, 5];
const invalidLengthResult = createPhoneNumber(invalidArrayLength);
console.log(invalidLengthResult); // Output: Invalid input: Array must contain 10 integers between 0 and 9.

const invalidArrayValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const invalidValuesResult = createPhoneNumber(invalidArrayValues);
console.log(invalidValuesResult); // Output: Invalid input: Array must contain 10 integers between 0 and 9.
