module.exports = function (req, res, next) {
  const { mobileNumber, accountNumber, name } = req.body;
  if (!mobileNumber || !accountNumber || !name) {
    return res.status(400).json({ error: 'Missing registration fields' });
  }
  next();
};
