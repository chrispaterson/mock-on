import {mockBoolean} from './mockBoolean';

export function maybeUndefined<T>(value: T): T | undefined {

  if (mockBoolean()) {

    return value;

  }

}
