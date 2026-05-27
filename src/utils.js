/**
 * Adds two numbers together.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Returns a greeting string.
 * @param {string} name
 * @returns {string}
 */
function greet(name) {
  if (!name || typeof name !== "string") {
    throw new Error("Name must be a non-empty string");
  }
  return `Hello, ${name}!`;
}

module.exports = { add, multiply, greet };
