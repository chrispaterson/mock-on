import {mockInt} from './mockInt';

type IterableList<T> = Iterable<T> | ArrayLike<T>;
type List<T> = IterableList<T> | Record<string | number | symbol, T>;

/**
 * Function that selects a random item from a list of items.
 *
 * @param list - Maybe be an Array, Iterable, or a plain object/ enum.
 * @returns a random item from the list
 */
export const mockItem = <T>(list: List<T>): T => {

  const values = Object.values(list);
  return values[
    mockInt({
      min: 0,
      max: values.length - 1,
    })
  ];

};
