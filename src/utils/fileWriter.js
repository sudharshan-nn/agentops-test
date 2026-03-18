// fileWriter.js

const fs = require('fs');
const path = require('path');

/**
 * Writes data to a file, creating the file if it doesn't exist.
 *
 * @param {string} filePath - The path to the file where data should be written.
 * @param {string|Buffer} data - The data to write to the file.
 * @returns {Promise<void>} - A promise that resolves when the writing is complete.
 */
function writeToFile(filePath, data) {
    return new Promise((resolve, reject) => {
        const directory = path.dirname(filePath);
        fs.mkdir(directory, { recursive: true }, (err) => {
            if (err) return reject(err);

            fs.writeFile(filePath, data, (err) => {
                if (err) return reject(err);
                resolve();
            });
        });
    });
}

module.exports = { writeToFile };
