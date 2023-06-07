import { capitalize } from "./capitalize";

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
    expect(capitalize("openai")).toBe("Openai");
  });

  it("should return an empty string if the input is an empty string", () => {
    expect(capitalize("")).toBe("");
  });

  it("should return the same string if the first character is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
    expect(capitalize("World")).toBe("World");
    expect(capitalize("Openai")).toBe("Openai");
  });
});
