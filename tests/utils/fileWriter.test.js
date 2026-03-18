const fs = require('fs');
const { writeFile } = require('../../src/utils/fileWriter');

jest.mock('fs');

describe('writeFile', () => {
  beforeEach(() => {
    fs.writeFile.mockClear();
    fs.appendFile.mockClear();
  });

  it('should write string data to a file', async () => {
    const path = 'test.txt';
    const data = 'Hello, World!';
    await writeFile(path, data, { append: false });
    expect(fs.writeFile).toHaveBeenCalledWith(path, data, 'utf8', expect.any(Function));
  });

  it('should write JSON data to a file', async () => {
    const path = 'test.json';
    const jsonData = { key: 'value' };
    await writeFile(path, jsonData, { append: false });
    expect(fs.writeFile).toHaveBeenCalledWith(path, JSON.stringify(jsonData), 'utf8', expect.any(Function));
  });

  it('should append data to a file if append option is true', async () => {
    const path = 'test.txt';
    const data = 'Appended Text';
    await writeFile(path, data, { append: true });
    expect(fs.appendFile).toHaveBeenCalledWith(path, data, 'utf8', expect.any(Function));
  });

  it('should throw an error if write fails', async () => {
    const path = 'test.txt';
    const data = 'Error Text';
    const errorMessage = 'Write Error';

    fs.writeFile.mockImplementation((_, __, ___, callback) => callback(new Error(errorMessage)));

    await expect(writeFile(path, data, { append: false })).rejects.toThrow(errorMessage);
  });
});
