const { add } = require("./calculator.js");
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
