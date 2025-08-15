const fingerprintModel = require('../models/fingerprintModel');
const matchUtils = require('../utils/matchUtils');

exports.verify = async (deviceId, simHash, incomingHistory) => {
  const stored = await fingerprintModel.findByDeviceAndSim(deviceId, simHash);
  if (!stored) return { status: 'not_found' };

  const matchScore = matchUtils.compareHistories(stored.transactionHistory, incomingHistory);
  if (matchScore >= 0.9) {
    return { status: 'verified', confidence: matchScore * 100 };
  } else {
    return { status: 'mismatch', confidence: matchScore * 100 };
  }
};
