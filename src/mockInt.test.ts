import {mockInt} from './mockInt';

describe('mockInt', (): void => {

  test('Throws and error if max < min', (): void => {

    expect((): number => mockInt({
      min: 100,
      max: 0,
    })).toThrow();

  });

  test('if min and max are the same, that\'s ok', (): void => {

    const min = 5;
    const max = 5;
    const value = mockInt({
      min,
      max,
    });

    expect(value).toEqual(min);
    expect(value).toEqual(max);

  });

  const numberOfRuns = 100;

  describe(`${numberOfRuns} runs`, (): void => {

    const aRun = (runNumber: number): void => {

      test(`Run #${runNumber}: create a random int between 0 and 100 by default`, (): void => {

        const min = 0;
        const max = 100;
        const value = mockInt();

        expect(value).toBeGreaterThanOrEqual(min);
        expect(value).toBeLessThanOrEqual(max);

      });

      test(`Run #${runNumber}: create a random int between the specified min and max`, (): void => {

        const min = 1;
        const max = 5;
        const value = mockInt({
          min,
          max,
        });

        expect(value).toBeGreaterThanOrEqual(min);
        expect(value).toBeLessThanOrEqual(max);

      });

    };

    for (let i = 0; i < numberOfRuns; i++) {

      aRun(i + 1);

    }

  });

});
