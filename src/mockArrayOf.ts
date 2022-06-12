import {mockInt} from './mockInt';

type Props = {
  maxLength?: number;
  minLength?: number;
  length?: number;
};

export function mockArrayOf<T = unknown>(
  create: (index?: number) => T,
  {
    minLength = 1, maxLength = 30, length,
  }: Props = {},
): T[] {

  const result: T[] = [];

  if (minLength > maxLength) {

    maxLength = minLength + 1;

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
