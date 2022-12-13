import '../../react/setup-fixture';

import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';
import { ExchangeRateTile } from './ExchangeRateTile';

const button: ButtonProps = {
  href: 'https://coins.rshb.ru/exchange',
  text: 'Купить валюту',
  target: '_blank',
  version: 'primary',
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <ExchangeRateTile button={button} className="col-span-8" />
    </div>
  ),
};
