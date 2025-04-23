function createPhoneNumber(numbers) {
  if (numbers.length !== 10 || numbers.some((num) => num < 0 || num > 9)) {
    return "Invalid input: Array must contain 10 integers between 0 and 9.";
  }

  const part1 = numbers.slice(0, 3).join("");
  const part2 = numbers.slice(3, 6).join("");
  const part3 = numbers.slice(6, 10).join("");

  return `(${part1}) ${part2}-${part3}`;
}

module.exports.createPhoneNumber = createPhoneNumber;

//   // Example usage:
//   const phoneNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//   const formattedPhoneNumber = createPhoneNumber(phoneNumberArray);
//   console.log(formattedPhoneNumber); // Output: (123) 456-7890

//   const invalidArrayLength = [1, 2, 3, 4, 5];
//   const invalidLengthResult = createPhoneNumber(invalidArrayLength);
//   console.log(invalidLengthResult); // Output: Invalid input: Array must contain 10 integers between 0 and 9.

//   const invalidArrayValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const invalidValuesResult = createPhoneNumber(invalidArrayValues);
//   console.log(invalidValuesResult); // Output: Invalid input: Array must contain 10 integers between 0 and 9.
