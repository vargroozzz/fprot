import * as symbols from '../symbols.js'

export default {
    [symbols.map]: f => xs => xs.map(f),
  }