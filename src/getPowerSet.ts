/**
 * This function creates all possible combination of boolean values.
 *
 * @param numItems[number] - number of boolean items.
 * @return boolean[][] -
 * two dimensional array of boolean values.  The row is numItems long.
 */
export const getPowerSet = (numItems: number): boolean[][] => {

  const total = 1 << numItems;
  const powSet: boolean[][] = [];

  for (let i = 0; i < total; i++) {

    const group: boolean[] = [];

    for (let j=0; j < numItems; j++) {

      group.push(!!((i >> j) & 1));

    }

    powSet.push(group);

  }

  return powSet;

};
