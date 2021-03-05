import {mockSegmentedString} from './mockSegmentedString';
import {urlSafeCharset} from './urlSafeCharset';

type Props = {
  maxLength?: number;
  minLength?: number;
  pathMaxLength?: number;
  pathMinLength?: number;
}

export function mockPath({
  maxLength = 10,
  minLength = 1,
  pathMaxLength = 30,
  pathMinLength = 1,
}: Props = {}): string {

  return mockSegmentedString({
    maxLength,
    minLength,
    segmentMaxLength: pathMaxLength,
    segmentMinLength: pathMinLength,
    separator: '/',
    charSet: urlSafeCharset,
  });

}
