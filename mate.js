const AssertionError = require('assert').AssertionError;
const chalk = require('chalk')

function mate() {
  let passed = []
  let failed = []

  return {
    describe: (message, cb)  => {

      console.log("\n")
      console.log(" --- ", chalk.blue(message), " --- ")
      cb()
      
      console.log("Passing tests:", passed.map(test => "✅").join(' '))
      failed.forEach(test => console.log(chalk.red(test.message, ":", test.error), "❌"))
      console.log(chalk.blue(`${passed.length} tests passing, ${failed.length} tests failing`))
      console.log("\n")
    },
    
    it: (message, cb) => {
      try {
        cb()
        passed.push(message)
      } catch (e) {
        failed.push({
          error: e.message,
          message
        }) 
      }
    }
  }
}

module.exports = mate()
