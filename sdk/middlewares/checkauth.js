const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets');

module.exports = function (req, res, next) {
  const token = req.cookies.session;
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const user = jwt.verify(token, jwtSecret);
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid session' });
  }
};
