import {mockSegmentedString} from './mockSegmentedString';
import {mockPath} from './mockPath';
import {publicSuffixes} from './publicSuffixes';
import {mockInt} from './mockInt';

type Props = {
  https?: boolean;
  maxLength?: number;
  minLength?: number;
  pathMaxLength?: number;
  pathMinLength?: number;
  topLevelDomain?: string;
};

export const mockUrl = ({
  https = true,
  maxLength = 10,
  minLength = 1,
  pathMaxLength = 30,
  pathMinLength = 1,
  topLevelDomain,
}: Props = {}): string =>
  `http${https ? 's' : ''}://${mockSegmentedString({
    separator: '.',
    maxLength: 2,
    charCodeStart: [97],
    charCodeEnd: [122],
  })}${
    topLevelDomain ?
      topLevelDomain : /**
         * Some domains have special encodings that need to be  URI encoded.
         * Especially since when testing, methods like fetch will do that
         * automatically.
         */
      encodeURIComponent(
        publicSuffixes[
          mockInt({
            min: 0,
            max: publicSuffixes.length - 1,
          })
        ],
      )
  }/${mockPath({
    maxLength,
    minLength,
    pathMaxLength,
    pathMinLength,
  })}`;
