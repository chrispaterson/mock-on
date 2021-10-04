/**
 * When testing some values it's a good idea to test the behavior when the
 * value is undefined if that is possible.  This function just makes the value
 * undefined sometimes.
 *
 * @param value - the value to sometimes be undefined
 * @returns result - either the value or undefined
 */
import {mockBoolean} from './mockBoolean';

export const maybeUndefined = <T>(value: T): T | undefined => mockBoolean() ? value : undefined;
