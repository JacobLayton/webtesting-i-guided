const { add, multiply } = require("./calculator.js");
// SUT: System Under Test
// suite > test cases > assertions > matchers
// test away!
test("adds two numbers", () => {
  // Arrange (setup)
  const expected = 4;

  // Act (Run SUT)
  const actual = add(2, 2);

  // Assert
  expect(actual).toBe(expected);

  // Using the .toBe() matcher
  expect(add(2, 2)).toBe(4);
  expect(add(3, 1)).toBe(4);
});

it("math.add() should return null when arguments are not numbers", () => {
  expect(add()).toBeNull();
  expect(add(1)).toBeNull();
  expect(add(null, 1)).toBeNull();
  expect(add(undefined, 1)).toBeNull();
  expect(add(3, "4")).toBeNull();
  expect(add({}, "4")).toBeNull();
  expect(add([], "4")).toBeNull();
  expect(add(NaN, "4")).toBeNull();
});

it("multiplies two numbers", () => {
  expect(multiply(3, 4)).toBe(12);
});
