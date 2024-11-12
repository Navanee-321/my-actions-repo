// multiply.test.js

// Simple function to multiply numbers
function multiply(a, b) {
  return a * b;
}

// Jest test cases
test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6); // Check if 2 * 3 equals 6
});

test('multiplies 0 * 5 to equal 0', () => {
  expect(multiply(0, 5)).toBe(0); // Check if 0 * 5 equals 0
});

test('multiplies -2 * 3 to equal -6', () => {
  expect(multiply(-2, 3)).toBe(-6); // Check if -2 * 3 equals -6
});

