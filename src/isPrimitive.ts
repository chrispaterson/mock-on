/**
 * Simple utility for determining whether a value is a primitive value or not.
 *
 * @param value - the value to check
 * @return boolean - whether the value is a primitive or not
 */
export const isPrimitive = (value: unknown): boolean => (typeof value === 'number' || typeof value === 'string' || typeof value === 'boolean');
