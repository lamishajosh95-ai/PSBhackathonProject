const crypto = require('crypto');

module.exports = function verifyFinalToken(bankToken, accountNumber, timestamp, receivedToken) {
  const hmac = crypto.createHmac('sha256', bankToken);
  hmac.update(accountNumber + timestamp);
  const expectedToken = hmac.digest('hex');
  return expectedToken === receivedToken;
};
