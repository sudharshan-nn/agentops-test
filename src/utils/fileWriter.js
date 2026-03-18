// File writer utility function

/**
 * Write data to a specified file.
 * @param {string} filePath - The path to the file where the data will be written.
 * @param {string | Buffer | Uint8Array} data - The data to write to the file.
 * @throws Will throw an error if the file cannot be written.
 */
const fs = require('fs');

function writeFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.error(`Unable to write file at ${filePath}:`, error);
    throw error;
  }
}

module.exports = writeFile;
