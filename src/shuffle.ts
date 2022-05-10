import {mockInt} from './mockInt';

/**
 * Function that shuffles the order of items in a given array and
 * returns that same array.  Implements the fisher-yates shuffle
 * algorithm.
 *
 * @param arr - array to shuffle
 * @returns arr -the same  array, but shuffled
 */
export const shuffle = <T = unknown>(arr: T[]): T[] => {

  for (let i = arr.length - 1; i > 0; i--) {

    const j = mockInt({max: i - 1});
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;

  }

  return arr;

};
