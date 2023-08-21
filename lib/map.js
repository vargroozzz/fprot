import { getFunctorProtocol } from './utils/getProtocol.js'

export default overrides => f => data => getFunctorProtocol(overrides)(data)(f)(data)

