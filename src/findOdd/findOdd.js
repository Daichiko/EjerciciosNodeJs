function findOdd(arr) {
  const counts = {};

  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  for (const num in counts) {
    if (counts[num] % 2 !== 0) {
      return parseInt(num);
    }
  }

  // This line should ideally not be reached based on the problem description
  return null;
}

// Examples:
console.log(findOdd([7])); // Output: 7
console.log(findOdd([0])); // Output: 0
console.log(findOdd([1, 1, 2])); // Output: 2
console.log(findOdd([0, 1, 0, 1, 0])); // Output: 0
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); // Output: 4
