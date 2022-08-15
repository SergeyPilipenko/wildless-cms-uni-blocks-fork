import type { Picture } from '../../model/Picture';
import { context } from '../../setup-fixture';
import { ProductBlock } from './ProductBlock';
import { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { Benefit } from '../BenefitsBlock/BenefitsBlockContent';

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

const benefits = [
  {
    label: 'До 5 млн ₽',
    description: 'Кредитный лимит',
    icon: 'EmptyWalletIcon',
  },
  {
    label: 'От 16,9%',
    description: 'Ставка по кредиту',
    icon: 'PercentageSquareIcon',
  },
  {
    label: 'До 5 лет',
    description: 'Срок кредитования',
    icon: 'CalendarIcon',
  },
];

const buttons = [
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
] as ButtonWithIconProps;

const items = [
  'Совершайте любые личные покупки',
  'Используйте корпоративную карту как обычную дебетовую, если вы ИП',
  'Расходы для бизнеса на УСН 15% позволят снизить налоговую базу',
];

export default {
  default: (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        title={'Кредит до 5 000 000 Р\nбез залога и поручителей'}
        description="Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт."
        benefits={benefits as Benefit[]}
        buttons={buttons as ButtonWithIconProps[]}
        image={image}
      />
    </div>
  ),
  items: (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        title={'Кредит до 5 000 000 Р\nбез залога и поручителей'}
        description="Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт."
        items={items}
        buttons={buttons as ButtonWithIconProps[]}
        image={image}
      />
    </div>
  ),
};
