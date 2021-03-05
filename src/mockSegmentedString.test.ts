import {mockSegmentedString} from './mockSegmentedString';

describe('mockSegmentedString', ():void => {

  test('defaults to between 1 and 10 segments of random length between 1 and 30 using the - as a separator', (): void => {

    const str = mockSegmentedString();
    const sploded = str.split('-');

    expect(sploded.length).toBeGreaterThanOrEqual(1);
    expect(sploded.length).toBeLessThanOrEqual(10);

    sploded.forEach((section:string): void => {

      const sectionLength = section.length;

      expect(sectionLength).toBeGreaterThanOrEqual(1);
      expect(sectionLength).toBeLessThanOrEqual(30);

    });

  });

});
