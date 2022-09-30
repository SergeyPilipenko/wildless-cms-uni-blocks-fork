import { context } from '../../react/setup-fixture';

import { ExchangeRateTile } from './ExchangeRateTile';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';

const button: ButtonProps = {
  href: 'https://coins.rshb.ru/exchange',
  text: 'Купить валюту',
  target: '_blank',
  version: 'primary',
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <ExchangeRateTile context={context} button={button} className="col-span-8" />
    </div>
  ),
};
