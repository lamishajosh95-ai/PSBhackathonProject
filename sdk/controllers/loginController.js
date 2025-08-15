//Check if token given or not
const verifyFinalToken = require('../utils/verifyFinalToken');
const { generateJWT } = require('../utils/storeUserData');

exports.verifyLogin = (req, res) => {
  const { mobileNumber, finalToken, accountNumber, timestamp } = req.body;

  const bankToken = "abc123"; // Replace with secure DB lookup
  const isValid = verifyFinalToken(bankToken, accountNumber, timestamp, finalToken);

  if (isValid) {//i.e. some such user exists so login allow kro aur payment screen show karo
    const jwt = generateJWT({ mobileNumber, accountNumber });
    res.cookie('session', jwt, { httpOnly: true });
    res.json({ success: true, jwt });
  } else {
    //user doesnt exist with this HTA and phone number
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
};
