import {mockInt} from './mockInt';
import {mockString} from './mockString';

type Props = {
  maxLength?: number;
  minLength?: number;
  stringMaxLength?: number;
  stringMinLength?: number;
  charCodeStart?: number | number[];
  charCodeEnd?: number | number[];
  charSet?: string[];
}

export function mockStringArray({
  maxLength = 10,
  minLength = 1,
  stringMaxLength = 30,
  stringMinLength = 1,
  charCodeStart = [48, 65, 97],
  charCodeEnd = [57, 90, 122],
  charSet,
}: Props = {}): string[] {

  const result: string[] = [];
  const len = mockInt({
    min: minLength,
    max: maxLength,
  });

  for (let i=0; i < len; i++) {

    result.push(mockString({
      charCodeStart,
      charCodeEnd,
      charSet,
      maxLength: stringMaxLength,
      minLength: stringMinLength,
    }));

  }

  return result;

}
