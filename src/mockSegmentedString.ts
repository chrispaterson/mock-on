import {mockStringArray} from './mockStringArray';

type Props = {
  maxLength?: number;
  minLength?: number;
  segmentMaxLength?: number;
  segmentMinLength?: number;
  separator?: string;
  charCodeStart?: number | number[];
  charCodeEnd?: number | number[];
  charSet?: string[];
}

export function mockSegmentedString({
  maxLength = 10,
  minLength = 1,
  segmentMaxLength = 30,
  segmentMinLength = 1,
  separator = '-',
  charCodeStart = [48, 65, 97],
  charCodeEnd = [57, 90, 122],
  charSet,
}: Props = {}): string {

  if (charSet?.includes(separator)) {

    throw new Error(`Well, that's gonna be confusing... your separator "${separator}" is also in your charset`);

  }

  return mockStringArray({
    maxLength,
    minLength,
    stringMaxLength: segmentMaxLength,
    stringMinLength: segmentMinLength,
    charCodeStart,
    charCodeEnd,
    charSet,
  }).join(separator);

}
