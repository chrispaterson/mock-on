import {mockInt} from './mockInt';

type Props = {
  maxLength?: number;
  minLength?: number;
  charCodeStart?: number | number[];
  charCodeEnd?: number | number[];
  charSet?: string[];
}

const throwInvalidCharCode = (): never => {

  throw new Error('Invalid charCode range');

};

export function mockString({
  maxLength = 30,
  minLength = 1,
  charCodeStart = [48, 65, 97],
  charCodeEnd = [57, 90, 122],
  charSet,
}: Props = {}): string {

  let retr = '';
  const length = mockInt({
    min: minLength, max: maxLength,
  });
  let theCharSet: string[] = [];

  if (Array.isArray(charSet)) {

    theCharSet = Array.from(new Set<string>(charSet));

  } else {

    if (Array.isArray(charCodeStart) && typeof charCodeEnd === 'number') {

      if (charCodeStart.some((value: number): boolean => value > charCodeEnd)) {

        throwInvalidCharCode();

      }

      charCodeStart.forEach((min: number): void => {

        for (let i = min; i <= charCodeEnd; i++) {

          theCharSet.push(String.fromCharCode(i));

        }

      });

    } else if (typeof charCodeStart === 'number' && Array.isArray(charCodeEnd)) {

      throwInvalidCharCode();

    } else if (Array.isArray(charCodeStart) && Array.isArray(charCodeEnd)) {

      if (charCodeStart.length !== charCodeEnd.length) {

        throwInvalidCharCode();

      }

      charCodeStart.forEach((min: number, idx: number): void => {

        for (let i = min; i <= charCodeEnd[idx]; i++) {

          theCharSet.push(String.fromCharCode(i));

        }

      });

    } else if (typeof charCodeStart === 'number' && typeof charCodeEnd === 'number') {

      for (let i = charCodeStart; i <= charCodeEnd; i++) {

        theCharSet.push(String.fromCharCode(i));

      }

    }

  }

  for (let i = 0; i < length; i++) {

    retr += theCharSet[mockInt({
      min: 0,
      max: theCharSet.length - 1,
    })];

  }

  return retr;

}
