const fs = require('fs');

/**
 * Writes data to a file, with options to overwrite or append.
 *
 * @param {string} path - The path to the file where data should be written.
 * @param {string|object} data - The data to write into the file. If an object is provided, it will be stringified as JSON.
 * @param {object} options - Options for writing the file.
 * @param {boolean} [options.append=false] - If true, append data to the file. Otherwise, overwrite the file.
 * @returns {Promise<void>} A promise that resolves when the file write is complete.
 * @throws {Error} Throws an error if writing the file fails.
 */
function writeFile(path, data, options = { append: false }) {
  return new Promise((resolve, reject) => {
    const writeData = typeof data === 'object' ? JSON.stringify(data) : data;
    const writeMethod = options.append ? 'appendFile' : 'writeFile';

    fs[writeMethod](path, writeData, 'utf8', (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

module.exports = { writeFile };
