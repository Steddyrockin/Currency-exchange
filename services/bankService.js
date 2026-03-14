async function sendToBank(amount) {

  console.log(`Sending $${amount} payout to Chase`);

  // connect ACH provider here
  // Stripe Treasury / Dwolla / Plaid

  return true;
}

module.exports = { sendToBank };