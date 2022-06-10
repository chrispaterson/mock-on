import {mockInt} from './mockInt';

type Settings = {
  maxLength?: number;
  minLength?: number;
};

export function mockArrayOf<T = unknown>(
  creatorFuntion: (index?: number) => T,
  {
    maxLength, minLength,
  }: Settings = {},
): T[] {

  const result: T[] = [];

  const len = mockInt({
    min: minLength,
    max: maxLength,
  });

  for (let i = 0; i < len; i++) {

    result.push(creatorFuntion(i));

  }

  return result;

}
