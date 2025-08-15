const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets');

const users = [];

exports.storeUser = function (user) {
  users.push(user);
  return true;
};

exports.generateJWT = function (user) {
  return jwt.sign(user, jwtSecret, { expiresIn: '1h' });
};
