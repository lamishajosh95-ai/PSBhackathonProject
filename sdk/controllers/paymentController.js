const processPayment = require('../utils/processPayment');

exports.processPayment = (req, res) => {
  const { amount, toAccount } = req.body;
  const user = req.user;

  const result = processPayment(user.accountNumber, toAccount, amount);

  if (result.success) {
    res.json({ success: true, message: 'Payment successful' });
  } else {
    res.status(400).json({ success: false, message: 'Payment failed' });
  }
};
