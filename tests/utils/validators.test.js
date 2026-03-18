const { validateEmail } = require('../../src/utils/validators');

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