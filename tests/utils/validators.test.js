const { validateEmail, multiply } = require('../../src/utils/validators');

/**
 * Unit tests for validateEmail function.
 */
describe('validateEmail', () => {
  // existing email validation tests...
});

/**
 * Unit tests for multiply function.
 */
describe('multiply', () => {
  test('returns correct product for positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('returns correct product for negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
  });

  test('returns correct product for a positive and a negative number', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  test('returns zero if one number is zero', () => {
    expect(multiply(0, 5)).toBe(0);
  });

  test('returns zero if both numbers are zero', () => {
    expect(multiply(0, 0)).toBe(0);
  });

  test('handles floating point multiplication', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });
});

/**
 * Unit tests for validateEmail function.
 */
describe('validateEmail', () => {
  test('returns true for valid email', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  test('returns false for empty string', () => {
    expect(validateEmail('')).toBe(false);
  });

  test('returns false when missing @ symbol', () => {
    expect(validateEmail('testexample.com')).toBe(false);
  });

  test('returns false when missing domain', () => {
    expect(validateEmail('test@')).toBe(false);
  });

  test('returns false for special characters', () => {
    expect(validateEmail('test@exa!mple.com')).toBe(false);
  });
});