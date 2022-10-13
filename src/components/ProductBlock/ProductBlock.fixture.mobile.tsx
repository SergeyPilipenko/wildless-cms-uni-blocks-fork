import { context } from '../../react/setup-fixture';
import { ProductBlock } from './ProductBlock';
import type { Picture } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import type { BenefitItemProps } from '../../ui-kit/BenefitItem/BenefitItemProps';

const title = 'Кредит до 5 000 000 Р\nбез залога и поручителей';
const description =
  'Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт.';
const label = 'Самое лучшее предложение';

const image: Picture = {
  src: 'money-1.png',
  format: 'webp',
  alt: 'Потребительский кредит наличными',
  size: {
    width: 234,
    height: 234,
  },
  sources: [
    {
      src: 'money-1.png 1x, money-1-2x.png 2x',
      format: 'png',
    },
  ],
};

const benefits: BenefitItemProps[] = [
  {
    label: 'До 5 млн ₽',
    description: 'Кредитный лимит',
    icon: { icon: 'EmptyWalletIcon' },
  },
  {
    label: 'От 16,9%',
    description: 'Ставка по кредиту',
    icon: { icon: 'PercentageSquareIcon' },
  },
  {
    label: 'До 5 лет',
    description: 'Срок кредитования',
    icon: { icon: 'CalendarIcon' },
  },
];

const buttons: ButtonWithIconProps[] = [
  {
    href: 'https://rshb.ru',
    text: 'Оформить карту',
    target: '_blank',
    version: 'primary',
  },
  {
    href: 'https://rshb.ru',
    text: 'Подробнее',
    target: '_blank',
    version: 'secondary',
  },
];

const items = [
  'Совершайте любые личные покупки',
  'Используйте корпоративную карту как обычную дебетовую, если вы ИП',
  'Расходы для бизнеса на УСН 15% позволят снизить налоговую базу',
];

const props = { title, description, image, buttons };

export default {
  default: (
    <div className="container grid grid-cols-12">
      <ProductBlock className="col-span-12" context={context} {...props} benefits={benefits} />
    </div>
  ),
  items: (
    <div className="container grid grid-cols-12">
      <ProductBlock className="col-span-12" context={context} {...props} items={items} />
    </div>
  ),
  'primary with label': (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        {...props}
        benefits={benefits}
        label={label}
      />
    </div>
  ),
  secondary: (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        {...props}
        benefits={benefits}
        version="secondary"
      />
    </div>
  ),
  'secondary with items': (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        {...props}
        items={items}
        version="secondary"
      />
    </div>
  ),
  'secondary with label': (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        {...props}
        benefits={benefits}
        label={label}
        version="secondary"
      />
    </div>
  ),
};
