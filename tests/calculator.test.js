import { add } from "../src/calculator.js";

describe("String Calculator", () => {
    test("returns 0 for an empty string", () => {
      expect(add("")).toBe(0);
    });
})  