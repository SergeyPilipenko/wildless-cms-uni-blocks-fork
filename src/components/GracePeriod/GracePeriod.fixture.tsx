import '../../react/setup-fixture';

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
      text: '1 декабря — беспроцентный период',
      greenText: 'начинается с первого числа каждого месяца',
      month: [
        {
          text: 'Август',
          image: august,
        },
      ],
    },
    {
      text: '25 сентября и 25 октября — обязательный платеж 25 числа следующих месяцев',
      greenText: '(минимальный платеж, 3% от суммы задолженности)',
      month: [
        {
          text: 'Сентябрь',
          image: september,
        },
        {
          text: 'Октябрь',
          image: october,
        },
      ],
    },
    {
      text: '25 ноября — последний день',
      greenText: 'беспроцентного 3-х месячного периода',
      month: [
        {
          text: 'Ноябрь',
          image: november,
        },
      ],
    },
    {
      text: '25 декабря — обязательный платеж в соответствии с тарифом',
      greenText: '',
      month: [
        {
          text: 'Декабрь',
          image: december,
        },
      ],
    },
  ],
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <GracePeriod className="col-span-12" {...GRACE_PERIOD} />
    </div>
  ),
};
