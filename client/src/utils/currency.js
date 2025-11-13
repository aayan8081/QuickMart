const USD_TO_INR = 83

const rupeeFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

export const toRupees = (amount = 0) => {
  const numericAmount = Number(amount ?? 0)
  const converted = numericAmount * USD_TO_INR
  if (Number.isNaN(converted)) {
    return rupeeFormatter.format(0)
  }
  return rupeeFormatter.format(converted)
}

export default toRupees

