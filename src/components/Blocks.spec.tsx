import { setupHooks } from '@redneckz/uni-jsx/lib/hooks';
import { setup } from '@redneckz/uni-jsx/lib/setup';
import { render } from '@testing-library/react';
import * as React from 'react';
import runtime from 'react/jsx-runtime';
import { Blocks } from './Blocks';
import type { ContentPageContext } from './ContentPage/ContentPageContext';

const { jsx, jsxs } = runtime as any;

setup(jsx, jsxs);
setupHooks(React as any);

const emptyFn = () => {
  /* For sure */
};

const context: ContentPageContext = {
  useRouter: () => ({
    pathname: '/credits',
    query: {},
    push: emptyFn,
    replace: emptyFn,
  }),
  handlerDecorator: (): any => emptyFn,
  IntersectionObserverTag: ({ children }) => children,
};

jest.mock('@redneckz/uni-jsx/lib/hooks/useAsyncData', () => ({
  __esModule: true,
  useAsyncData: () => ({}),
}));

describe('Blocks', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  for (const [key, BlockComponent] of Object.entries(Blocks)) {
    describe(key, () => {
      it(`should render block "${key}" without content`, () => {
        expect.assertions(2);

        const { container } = render(<BlockComponent context={context} />);
        expect(container.firstChild).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
      });

      it(`should render block "${key}" with demo content`, async () => {
        expect.assertions(1);

        let data = {};

        try {
          const { default: example } = await import(`./${key}/${key}.example.json`);
          data = example;
        } catch (ex) {
          // Do nothing
        }

        const { container } = render(<BlockComponent context={context} {...data} />);
        expect(container.firstChild).toBeTruthy();
      });
    });
  }
});
