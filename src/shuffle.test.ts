import {shuffle} from './shuffle';
import {mockIntArray} from './mockIntArray';

describe('shuffle', (): void => {

  test('same reference', (): void => {

    const arr = mockIntArray({unique: true});
    const shuffled = shuffle(arr);

    expect(arr).toStrictEqual(shuffled);

  });

  test('same length', (): void => {

    const arr = mockIntArray({unique: true});
    const arrLen = arr.length;
    const shuffled = shuffle(arr);

    expect(shuffled).toHaveLength(arrLen);

  });

  test('different order', (): void => {

    const arr = mockIntArray({unique: true});
    const snapshot = [...arr];
    const shuffled = shuffle(arr);

    expect(snapshot).not.toEqual(shuffled);

  });

});
