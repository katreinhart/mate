const AssertionError = require('assert').AssertionError
const chalk = require('chalk')

function mate() {
  let passed = []
  let failed = []
  let pending = []

  return {
    describe: (message, cb)  => {

      console.log("\n--- ", chalk.blue(message), " --- \n")
      cb()
      
      console.log("Passing tests:", passed.map(test => "✅").join(' '))
      failed.forEach(test => console.log(chalk.red(test.message, ":", test.error), "❌"))
      console.log("")
      
      if (pending.length) {
        console.log(chalk.green(`${passed.length} tests passing,`), chalk.red(`\n${failed.length} tests failing,`), chalk.blue(`\n${pending.length} tests pending`))
      } else {
        console.log(chalk.green(`${passed.length} tests passing,`), chalk.red(`\n${failed.length} tests failing`))
      }
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
    },

    xdescribe: (message, cb) => {
      console.log("\n--- ", chalk.blue(message), " --- \n")
      cb()
      console.log(chalk.blue(`${passed.length + failed.length + pending.length} tests pending`))
    },

    xit: (message, cb) => {
      pending.push(message)
    }
  }
}

module.exports = mate()
