import {mockInt} from './mockInt';

type Settings = {
  maxLength?: number;
  minLength?: number;
  length?: number;
};

export function mockArrayOf<T = unknown>(
  create: (index?: number) => T,
  {
    maxLength = 30, minLength = 1, length,
  }: Settings = {},
): T[] {

  const result: T[] = [];

  if (minLength > maxLength) {

    maxLength += 1;

  }

  const len =
    length ??
    mockInt({
      min: minLength,
      max: maxLength,
    });

  for (let i = 0; i < len; i++) {

    result.push(create(i));

  }

  return result;

}
