module.exports = function processPayment(fromAccount, toAccount, amount) {
  if (!fromAccount || !toAccount || amount <= 0) return { success: false };
  // Simulate payment logic
  return { success: true };
};
