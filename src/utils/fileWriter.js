const fs = require('fs');

/**
 * Writes data to a specified file.
 * @param {string} filePath - The path of the file where data should be written.
 * @param {string} data - The data to write to the file.
 * @returns {Promise<void>} - A promise that resolves when the data has been written.
 * @throws Will throw an error if the write operation fails.
 */
function writeFile(filePath, data) {
    return new Promise((resolve, reject) => {
        try {
            fs.writeFile(filePath, data, 'utf8', (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = { writeFile };