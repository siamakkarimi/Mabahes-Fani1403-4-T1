const hasDriversLicense = true
const hasGoodVision = true

if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!')
} else {
  console.log('Someone else should drive...')
}

console.log(hasDriversLicense || hasGoodVision)
