import { context } from '../../setup-fixture';

import type { Picture } from '../../model/Picture';
import { GracePeriod } from './GracePeriod';
import type { GracePeriodContent } from './GracePeriodContent';

const august: Picture = {
  src: 'calendar/august.png',
  format: 'webp',
  size: {
    width: 210,
  },
  alt: 'Пример использования «Карты для покупок в рассрочку»',
};

const september: Picture = {
  src: 'calendar/september.png',
  format: 'webp',
  size: {
    width: 210,
  },
  alt: 'Пример использования «Карты для покупок в рассрочку»',
};

const october: Picture = {
  src: 'calendar/october.png',
  format: 'webp',
  size: {
    width: 210,
  },
  alt: 'Пример использования «Карты для покупок в рассрочку»',
};

const november: Picture = {
  src: 'calendar/november.png',
  format: 'webp',
  size: {
    width: 210,
  },
  alt: 'Пример использования «Карты для покупок в рассрочку»',
};

const december: Picture = {
  src: 'calendar/december.png',
  format: 'webp',
  size: {
    width: 210,
  },
  alt: 'Пример использования «Карты для покупок в рассрочку»',
};

export const GRACE_PERIOD: GracePeriodContent = {
  title: 'Пример использования «Карты для покупок в рассрочку»:',
  description: 'Необязательное описание блока',
  calendar: [
    {
      blackText: '1 декабря — беспроцентный период',
      greenText: 'начинается с первого числа каждого месяца',
      month: [
        {
          name: 'Август',
          image: august,
        },
      ],
    },
    {
      blackText: '25 сентября и 25 октября — обязательный платеж 25 числа следующих месяцев',
      greenText: '(минимальный платеж, 3% от суммы задолженности)',
      month: [
        {
          name: 'Сентябрь',
          image: september,
        },
        {
          name: 'Октябрь',
          image: october,
        },
      ],
    },
    {
      blackText: '25 ноября — последний день',
      greenText: 'беспроцентного 3-х месячного периода',
      month: [
        {
          name: 'Ноябрь',
          image: november,
        },
      ],
    },
    {
      blackText: '25 декабря — обязательный платеж в соответствии с тарифом',
      greenText: '',
      month: [
        {
          name: 'Декабрь',
          image: december,
        },
      ],
    },
  ],
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <GracePeriod className="col-span-12" context={context} {...GRACE_PERIOD} />
    </div>
  ),
};
