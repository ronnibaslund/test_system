import os from 'os'
const host = os.hostname()

class Logger {
  excepton(e) {
    console.error(e)
  }

  error(e) {
    console.error(e)
  }

  message(o) {
    console.log(o)
  }
}

export default new Logger()
