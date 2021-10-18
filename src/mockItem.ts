import {mockInt} from './mockInt';

export const mockItem = <T>(list: Iterable<T> | ArrayLike<T>): T => {

  const ar = Array.from(list);
  return ar[mockInt({
    min: 0,
    max: ar.length - 1,
  })];

};
