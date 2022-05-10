import {mockInt} from './mockInt';
import {mockIntArray} from './mockIntArray';
import {mockSubset} from './mockSubset';

describe('mockSubset', (): void => {

  test('it should always return an array of length equal to size argument', (): void => {

    const arr = mockIntArray({unique: true});
    const size = mockInt({max: arr.length});
    const subset = mockSubset({
      size,
      list: arr,
    });

    expect(subset).toHaveLength(size);

  });

  test('it should always return an array of random length if no size argument is passed', (): void => {

    const arr = mockIntArray({unique: true});
    const subset = mockSubset({list: arr});

    const subsetLength = subset.length;
    expect(subsetLength).toBeGreaterThan(0);
    expect(subsetLength).toBeLessThan(arr.length);

  });

});
