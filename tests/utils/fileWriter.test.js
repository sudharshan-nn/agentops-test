const fs = require('fs');
const path = require('path');
const { writeToFile } = require('../../src/utils/fileWriter');

const testFilePath = path.join(__dirname, 'test_file.txt');

describe('writeToFile', () => {
    afterEach(() => {
        if (fs.existsSync(testFilePath)) {
            fs.unlinkSync(testFilePath);
        }
    });

    test('should write data to a file', async () => {
        const data = 'Hello, World!';
        await writeToFile(testFilePath, data);
        const writtenData = fs.readFileSync(testFilePath, 'utf-8');
        expect(writtenData).toBe(data);
    });

    test('should handle errors for invalid paths', async () => {
        await expect(writeToFile('/invalid/path.txt', 'data')).rejects.toThrowError();
    });
});
