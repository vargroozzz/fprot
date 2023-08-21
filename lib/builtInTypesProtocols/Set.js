import * as symbols from '../symbols.js'

export default {
    [symbols.map]: f => xs => new Set([...xs.values()].map(f)),
  }