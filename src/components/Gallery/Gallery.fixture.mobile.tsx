import { ListOrientation } from '../../model/ListOrientation';
import type { Picture } from '../../model/Picture';
import { context } from '../../react/setup-fixture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { Gallery } from './Gallery';
import { GalleryCard } from './GalleryContent';

const isDotted = true;

const image: Picture = {
  src: 'money-1.png',
  format: 'webp',
  size: {
    width: 150,
    height: 150,
  },
  title: 'money',
};

const link: ButtonWithIconProps = {
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

const cards: GalleryCard[] = [
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
    version: 'secondary',
  },
  {
    image,
    title: 'Вклады в любой валюте',
    isDotted,
    items: defaultItems,
  },
  {
    title: 'Вклады в любой валюте',
    description: 'О Вклады до 1,4 млн застрахованы в государственной системе страхования вкладов',
  },
];

const defaultProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  orientation: 'vertical' as ListOrientation,
  context,
  cards: cards,
};

const scrollProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  orientation: 'horizontal' as ListOrientation,
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
