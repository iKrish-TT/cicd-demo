const { add, multiply, greet } = require("../src/utils");

describe("add()", () => {
  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds negative numbers", () => {
    expect(add(-1, -4)).toBe(-5);
  });

  test("adds zero", () => {
    expect(add(0, 7)).toBe(7);
  });
});

describe("multiply()", () => {
  test("multiplies two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("multiply by zero returns zero", () => {
    expect(multiply(99, 0)).toBe(0);
  });
});

describe("greet()", () => {
  test("returns a greeting with the given name", () => {
    expect(greet("Alice")).toBe("Hello, Alice!");
  });

  test("throws if name is missing", () => {
    expect(() => greet()).toThrow("Name must be a non-empty string");
  });

  test("throws if name is not a string", () => {
    expect(() => greet(42)).toThrow("Name must be a non-empty string");
  });
});
