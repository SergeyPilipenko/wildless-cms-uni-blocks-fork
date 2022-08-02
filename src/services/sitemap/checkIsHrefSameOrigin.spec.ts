import { checkIsHrefSameOrigin } from './checkIsHrefSameOrigin';

describe('checkIsHrefSameOrigin', () => {
  it('should check is URL has the same origin', () => {
    expect(
      checkIsHrefSameOrigin('http://foo.ru/other/path', {
        pathname: '/some/path',
        href: 'http://foo.ru/some/path',
      }),
    ).toEqual(true);
  });
  it('should check is URL has the other origin', () => {
    expect(
      checkIsHrefSameOrigin('http://foo.ru/other/path', {
        pathname: '/some/path',
        href: 'http://bar.ru/some/path',
      }),
    ).toEqual(false);
  });
});
