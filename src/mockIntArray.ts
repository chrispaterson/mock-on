import {mockInt} from './mockInt';

type Props = {
  min?: number,
  max?: number,
  length?: number,
  unique?: boolean,
}

export function mockIntArray({
  min = 0,
  max = 100,
  length = 30,
  unique = false,
}: Props = {}): number[] {

  if (max < min) {

    throw new Error(`max value must be greater than min value: min ${min} max ${max}`);

  }

  let retr: number[] = [];

  if ( unique ) {

    if (max - min === length) {

      for (let i = max - 1; i >= min; i--) {

        retr[mockInt({
          min: 0,
          max: i,
        })] = max + 1;

      }

    } else {

      const intSet = new Set<number>();

      while (intSet.size != length) {

        intSet.add(mockInt({
          min,
          max,
        }));

      }

      retr = Array.from(intSet);

    }

  } else {

    for (let i = 0; i < length; i++) {

      retr.push(mockInt({
        min,
        max,
      }));

    }

  }

  return retr;

}
