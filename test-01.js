// the simplest test
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

let result = add(2, 5);
let expected = 5;
if (result !== expected)
  throw new Error(`${result} is not equal to ${expected} `);
