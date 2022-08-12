import { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
import { context } from '../../setup-fixture';
import type { ButtonCommonProps } from '../../ui-kit/Button/Button';
import { Gallery } from './Gallery';

const image: Picture = {
  src: 'money-1.png',
  format: 'webp',
  size: {
    width: 150,
    height: 150,
  },
  title: 'money',
};

const buttonPrimary: ButtonCommonProps = {
  href: '/credit-cards',
  text: 'Подробнее',
  target: '_blank',
  version: 'secondary',
  icon: 'BankIcon',
};
const link: ButtonCommonProps = {
  href: '/credit-cards',
  text: 'Подробнее',
  target: '_blank',
  version: 'link',
};

const defaultItems = [
  { title: 'До 1 млн ₽', text: 'Кредитный лимит' },
  { title: 'От 16,9%', text: 'Ставка по кредиту' },
  { title: 'До 15% ', text: 'Кэшбэк от покупок' },
];

const cards = [
  {
    image,
    title: 'Вклады в любой валюте',
    description: 'О Вклады до 1,4 млн застрахованы в государственной системе страхования вкладов',
    button: link,
  },
  {
    image,
    title: 'Вклады в любой валюте',
    description: 'О Вклады до 1,4 млн застрахованы в государственной системе страхования вкладов',
  },
  {
    image,
    title: 'Вклады в любой валюте',
    items: defaultItems,
  },
  {
    title: 'Вклады в любой валюте',
    description: 'О Вклады до 1,4 млн застрахованы в государственной системе страхования вкладов',
  },
  {
    image,
    title: 'Вклады в любой валюте',
  },
  {
    image,
    title: 'Вклады в любой валюте',
    description: 'О Вклады до 1,4 млн застрахованы в государственной системе страхования вкладов',
    button: buttonPrimary,
  },
  {
    image,
    title: 'Вклады в любой валюте',
    description: 'О Вклады до 1,4 млн застрахованы в государственной системе страхования вкладов',
    button: buttonPrimary,
    version: 'secondary' as BlockVersion,
  },
];

const defaultProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  isScroll: false,
  context,
  cards: cards,
};

const scrollProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  isScroll: true,
  context,
  cards: cards,
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...defaultProps} />
    </div>
  ),
  scroll: (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...scrollProps} />
    </div>
  ),
};
