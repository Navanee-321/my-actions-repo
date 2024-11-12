// sum.test.js

// Simple function to add numbers
function sum(a, b) {
  return a + b;
}

// Jest test case to check if sum function works correctly
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3); // Check if 1 + 2 equals 3
});

test('adds 0 + 0 to equal 0', () => {
  expect(sum(0, 0)).toBe(0); // Check if 0 + 0 equals 0
});

test('adds -1 + 1 to equal 0', () => {
  expect(sum(-1, 1)).toBe(0); // Check if -1 + 1 equals 0
});

