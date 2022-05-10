import {mockInt} from './mockInt';
import {shuffle} from './shuffle';

type IterableList<T> = Iterable<T> | ArrayLike<T>;
type List<T> = IterableList<T> | Record<string | number | symbol, T>;
type Props<T> = {
  size?: number;
  list: List<T>;
};

/**
 * Function that selects a random subset of items from a list of items.
 *
 * @param size - optional specific number of items.
 * @param list - Maybe be an Array, Iterable, or a plain object/ enum.
 * @returns a random item from the list
 */
export const mockSubset = <T>({
  size, list,
}: Props<T>): T[] => {

  /**
   * If a size is passed in, then use that.  Otherwise, use a random length.
   */
  const values = shuffle(Object.values(list));
  const numItems = size ?? mockInt({max: values.length - 1});
  const result: T[] = [];

  for (let i = 0; i < numItems; i++) {

    result.push(values[i]);

  }

  return result;

};
