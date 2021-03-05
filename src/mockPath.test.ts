import {mockPath} from './mockPath';

describe('mockPath', ():void => {

  test('defaults to 5 segments of random length between 1 and 40 using the / as a separator', (): void => {

    const str = mockPath();
    const sploded = str.split('/');

    expect(sploded.length).toBeGreaterThanOrEqual(1);
    expect(sploded.length).toBeLessThanOrEqual(10);
    sploded.forEach((section:string): void => {

      const sectionLength = section.length;
      expect(sectionLength).toBeGreaterThanOrEqual(1);
      expect(sectionLength).toBeLessThanOrEqual(30);

    });

  });

});
