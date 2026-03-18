const fs = require('fs');
const writeFile = require('../../src/utils/fileWriter');
const path = require('path');

jest.mock('fs');

describe('writeFile', () => {
  const testData = 'Test Data';
  const testPath = path.join(__dirname, 'testOutput.txt');

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should write data to a file successfully', () => {
    writeFile(testPath, testData);
    expect(fs.writeFileSync).toHaveBeenCalledWith(testPath, testData);
  });

  test('should throw an error if file writing fails', () => {
    fs.writeFileSync.mockImplementationOnce(() => {
      throw new Error('Failed to write file');
    });

    expect(() => writeFile(testPath, testData)).toThrow('Failed to write file');
  });
});
