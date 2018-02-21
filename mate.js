const AssertionError = require('assert').AssertionError;
const chalk = require('chalk')

function describe(message, callback) {
  console.log(" --- ", message, " --- ")
  callback()
}

function it(message, callback) {
  try {
    callback()
    console.log(chalk.green(message), "✅")
  } catch (e) {
    console.log(chalk.red(e.message), "❌")
  }
}

module.exports = {
  describe,
  it
}
