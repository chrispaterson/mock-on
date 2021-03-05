import {mockInt} from './mockInt';

export function mockBoolean(): boolean {

  return !mockInt({max: 1});

}
