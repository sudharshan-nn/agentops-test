const { writeFile } = require('../../src/utils/fileWriter');
const fs = require('fs');

jest.mock('fs');

describe('writeFile', () => {
  const filePath = 'testFile.txt';
  const data = 'Hello, world!';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('writes data to the specified file', () => {
    fs.writeFileSync.mockImplementation(() => {});

    expect(() => writeFile(filePath, data)).not.toThrow();
    expect(fs.writeFileSync).toHaveBeenCalledWith(filePath, data);
  });

  it('throws an error if writing fails', () => {
    fs.writeFileSync.mockImplementation(() => {
      throw new Error('Failed to write to file');
    });

    expect(() => writeFile(filePath, data)).toThrow('Failed to write to file');
  });
});
