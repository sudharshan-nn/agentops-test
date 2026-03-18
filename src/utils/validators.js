/**
 * Validate if the provided string is a valid email.
 * @param {string} email - The email address to validate.
 * @returns {boolean} Returns true if the email is valid, and false otherwise.
 */
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
  return re.test(email);
}

module.exports = { validateEmail, multiply };