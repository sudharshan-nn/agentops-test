const { writeFile } = require('../../src/utils/fileWriter');
const fs = require('fs');
const path = require('path');

jest.mock('fs');

describe('writeFile', () => {
    const testFilePath = path.join(__dirname, 'test.txt');
    const testData = 'Hello, world!';

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should write data to a new file', async () => {
        fs.writeFile.mockImplementation((filePath, data, encoding, callback) => {
            callback(null);
        });

        await expect(writeFile(testFilePath, testData)).resolves.toBeUndefined();
        expect(fs.writeFile).toHaveBeenCalledWith(testFilePath, testData, 'utf8', expect.any(Function));
    });

    it('should overwrite data in an existing file', async () => {
        fs.writeFile.mockImplementation((filePath, data, encoding, callback) => {
            callback(null);
        });

        await expect(writeFile(testFilePath, 'New data')).resolves.toBeUndefined();
        expect(fs.writeFile).toHaveBeenCalledWith(testFilePath, 'New data', 'utf8', expect.any(Function));
    });

    it('should throw an error if writing to the file fails', async () => {
        const errorMessage = 'Permission denied';
        fs.writeFile.mockImplementation((filePath, data, encoding, callback) => {
            callback(new Error(errorMessage));
        });

        await expect(writeFile(testFilePath, testData)).rejects.toThrow(errorMessage);
    });
});
