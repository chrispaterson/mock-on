import {mockInt} from './mockInt';
import {mockArrayOf} from './mockArrayOf';

describe('mockArrayOf', (): void => {

  test('creates an array of specified length', (): void => {

    const length = mockInt();
    const arr = mockArrayOf((): number => mockInt(), {length});
    expect(arr).toHaveLength(length);

  });

  test('creates an array of at least one value by default', (): void => {

    const arr = mockArrayOf((): number => mockInt());
    expect(arr.length).toBeGreaterThan(0);

  });

  test('creates an array of at least the minLength value', (): void => {

    const minLength = mockInt();
    const arr = mockArrayOf((): number => mockInt(), {minLength});
    expect(arr.length).toBeGreaterThanOrEqual(minLength);

  });

  test('creates an array of less or equal to than maxLength', (): void => {

    const maxLength = mockInt();
    const arr = mockArrayOf((): number => mockInt(), {maxLength});
    expect(arr.length).toBeLessThanOrEqual(maxLength);

  });

});
