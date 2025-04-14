import { toCamelCase } from "./toCamelCase.js"; // Asegúrate de incluir la extensión .js

const testString1 = "hello-world";
const camelCaseString1 = toCamelCase(testString1);
console.log(
  `Texto inicial: ${testString1} texto resultante: ${camelCaseString1}`
);

const testString2 = "some_variable_name";
const camelCaseString2 = toCamelCase(testString2);
console.log(
  `Texto inicial: ${testString2} texto resultante: ${camelCaseString2}`
);
