const { storeUser } = require('../utils/storeUserData');

exports.registerUser = (req, res) => {
  const { mobileNumber, accountNumber, name } = req.body;
  const success = storeUser({ mobileNumber, accountNumber, name });

  if (success) {
    res.json({ success: true, message: 'User registered' });
  } else {
    res.status(500).json({ success: false, message: 'Registration failed' });
  }
};

