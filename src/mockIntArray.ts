import {mockArrayOf} from './mockArrayOf';
import {mockInt} from './mockInt';
import {shuffle} from './shuffle';

type Props = {
  min?: number;
  max?: number;
  maxLength?: number;
  minLength?: number;
  length?: number;
  unique?: boolean;
};

export function mockIntArray({
  min = 0,
  max = 100,
  minLength = 1,
  maxLength = 30,
  length,
  unique = false,
}: Props = {}): number[] {

  if (min > max) {

    max = min;

  }

  const retr: number[] = mockArrayOf(
    (index: number): number =>
      unique ?
        min + index :
        mockInt({
          min,
          max,
        }),
    {
      maxLength,
      minLength,
      length,
    },
  );

  return unique ? shuffle(retr) : retr;

}
