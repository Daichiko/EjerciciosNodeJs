export function toCamelCase(str) {
  if (!str) {
    return "";
  }

  const parts = str.split(/[-_]/);
  if (parts.length === 0) {
    return "";
  }

  let result = parts[0];

  for (let i = 1; i < parts.length; i++) {
    if (parts[i].length > 0) {
      result += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
    }
  }

  return result;
}

// console.log(toCamelCase("the-stealth-warrior")); // Output: theStealthWarrior
// console.log(toCamelCase("The_Stealth_Warrior")); // Output: TheStealthWarrior
// console.log(toCamelCase("The_Stealth-Warrior")); // Output: TheStealthWarrior
// console.log(toCamelCase("")); // Output:
// console.log(toCamelCase("a")); // Output: a
// console.log(toCamelCase("-a-b")); // Output: aB
// console.log(toCamelCase("_a_b")); // Output: aB
// console.log(toCamelCase("The-")); // Output: The
// console.log(toCamelCase("-Stealth")); // Output: Stealth
