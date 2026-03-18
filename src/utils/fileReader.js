const fs = require('fs');

/**
 * Reads the contents of a file and returns it as a string.
 * @param {string} filePath - The path to the file to be read.
 * @returns {Promise<string>} The contents of the file.
 */
function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = {
    readFile
};
