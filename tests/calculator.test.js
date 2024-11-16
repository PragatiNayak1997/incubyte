import { add } from "../src/calculator.js";

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself for a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("returns the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  test("returns the sum of multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("handles new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("throws an error for negative number", () => {
    expect(() => add("-1")).toThrow("negative numbers not allowed: -1");
  });

  test("throws an error for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  });

  test("lists all negative numbers in the error", () => {
    expect(() => add("-1,-2,3,-4")).toThrow(
      "negative numbers not allowed: -1, -2, -4"
    );
  });

  test("ignores numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
  });
});
