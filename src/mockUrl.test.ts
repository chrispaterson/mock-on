import {mockUrl} from './mockUrl';

describe('mockUrl', (): void => {

  test('creates something that looks like a url', (): void => {

    const str = mockUrl();
    expect(str.startsWith('https://'));

  });

});
