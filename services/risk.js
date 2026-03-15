function checkRisk(loss) {
  if (loss > 0.01) {
    throw new Error("Max loss exceeded")
  }
}

module.exports = { checkRisk }
