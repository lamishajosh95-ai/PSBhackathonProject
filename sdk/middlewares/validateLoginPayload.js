module.exports = function (req, res, next) {
  const { mobileNumber, finalToken, accountNumber, timestamp } = req.body;
  if (!mobileNumber || !finalToken || !accountNumber || !timestamp) {
    return res.status(400).json({ error: 'Missing login fields' });
  }
  next();
};
