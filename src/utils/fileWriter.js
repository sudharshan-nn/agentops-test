/**
 * Writes data to a specified file.
 *
 * @param {string} filePath - The path to the file where data should be written.
 * @param {string} data - The data to write to the file.
 * @throws Will throw an error if the file cannot be written.
 */
function writeFile(filePath, data) {
  const fs = require('fs');

  try {
    fs.writeFileSync(filePath, data);
    console.log(`Data successfully written to ${filePath}`);
  } catch (error) {
    console.error(`Error writing to file: ${error.message}`);
    throw new Error('Failed to write to file');
  }
}

module.exports = { writeFile };
