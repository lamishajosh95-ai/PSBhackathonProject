const mockDB = [
  {
    deviceId: 'device123',
    simHash: 'simABC',
    transactionHistory: [
      { id: 'txn1', amount: 100, merchant: 'StoreA' },
      { id: 'txn2', amount: 250, merchant: 'StoreB' },
    ]
  }
];

exports.findByDeviceAndSim = async (deviceId, simHash) => {
  return mockDB.find(entry => entry.deviceId === deviceId && entry.simHash === simHash);
};
