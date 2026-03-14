// services/bankService.js

async function sendToBank(amount) {

  // Integrate Stripe/Dwolla/Plaid here
  console.log(`Transferring $${amount} to bank account`);

  return { success: true };
}

module.exports = { sendToBank };
