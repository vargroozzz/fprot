import * as symbols from '../symbols.js';
import builtInTypesProtocols from '../builtInTypesProtocols/index.js';

const throwNotImplemented = (protocol, type) => {
    throw new Error(`Protocol ${protocol.description} is not implemented for type ${type.name}`);
}

const filterOverrides = protocol => overrides => [...overrides.entries()].reduce(
    (acc, [type, protocols]) => (protocol in protocols ? acc.set(type, protocols) : acc), new Map());

const getProtocol = protocol => overrides => data => (filterOverrides(protocol)(new Map([...builtInTypesProtocols, ...overrides])).get(data.constructor) ?? data.constructor)[protocol] ?? throwNotImplemented(protocol, data.constructor);

export const getFunctorProtocol = getProtocol(symbols.map)
export const getMapProtocol = getFunctorProtocol
export const getMappableProtocol = getFunctorProtocol

export default getProtocol