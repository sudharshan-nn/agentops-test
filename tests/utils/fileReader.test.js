const { readFile } = require('../../src/utils/fileReader');

// Mock the fs module
jest.mock('fs', () => ({
  readFile: jest.fn((path, encoding, callback) => {
    if (path === 'test.txt') {
      callback(null, 'File content');
    } else {
      callback(new Error('File not found'));
    }
  })
}));

const fs = require('fs');

describe('readFile', () => {
  test('should read file content successfully', async () => {
    const data = await readFile('test.txt');
    expect(data).toBe('File content');
  });

  test('should throw error if file not found', async () => {
    await expect(readFile('nonexistent.txt')).rejects.toThrow('File not found');
  });
});
