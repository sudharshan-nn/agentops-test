const { validateEmail, multiply } = require('../../src/utils/validators');

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

  describe('multiply', () => {
    test('returns 0 when multiplying any number by 0', () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
    });

    test('returns the number itself when multiplying by 1', () => {
      expect(multiply(5, 1)).toBe(5);
      expect(multiply(1, 5)).toBe(5);
    });

    test('correctly multiplies two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('correctly multiplies a positive and a negative number', () => {
      expect(multiply(-3, 4)).toBe(-12);
    });

    test('correctly multiplies two negative numbers', () => {
      expect(multiply(-3, -4)).toBe(12);
    });
  });
});