import { context } from '../../setup-fixture';

import { ProductTile } from './ProductTile';
import type { Picture } from '../../model/Picture';
import type { ProductTileContent } from './ProductTileContent';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';

const cardWithMoney: Picture = {
  src: 'card-with-diamond.png',
  alt: 'Кредиты в РСХБ',
  format: 'webp',
};

const letterWithMoney: Picture = {
  src: 'letter-with-money.png',
  alt: 'Пенсионный кредит в РСХБ',
  format: 'webp',
};

const building: Picture = {
  src: 'building.png',
  alt: 'Кредит под залог недвижимости в РСХБ',
  format: 'webp',
};

const benefits = [
  {
    label: 'до 5 млн Р',
    description: 'Кредитный лимит',
  },
  {
    label: 'от 12,5%',
    description: 'Процентная ставка',
  },
  {
    label: 'до 5 лет',
    description: 'Срок кредитования',
  },
];

const buttons: ButtonProps[] = [
  {
    text: 'Подробнее',
    href: '/credit-cards',
    version: 'secondary',
  },
];

const buttonsSecondary: ButtonProps[] = [
  {
    href: 'https://rshb.ru',
    text: 'Подробнее',
    target: '_blank',
    version: 'secondary',
  },
];

export const PRODUCT_TILE: ProductTileContent = {
  title: 'Акция! “Кредит На все, что хочется!”',
  description: 'Потребительский кредит на любые цели, без залога и поручительства',
  benefits,
  buttons: buttons,
  image: cardWithMoney,
};
export const PRODUCT_PENSION_TILE: ProductTileContent = {
  title: 'Кредит пенсионный',
  description: 'Для людей в возрасте до 75 лет',
  benefits,
  buttons: buttonsSecondary,
};

export default {
  credit: (
    <div className="container grid grid-cols-12">
      <ProductTile context={context} className="col-span-6" {...PRODUCT_TILE} />
    </div>
  ),
  pension: (
    <div className="container grid grid-cols-12">
      <ProductTile
        context={context}
        className="col-span-6"
        title="Акция! “Пенсионный кредит”"
        description={'Потребительский кредит на любые цели, без залога и поручительства'}
        benefits={benefits}
        buttons={buttonsSecondary}
        image={letterWithMoney}
      />
    </div>
  ),
  'credit-card': (
    <div className="container grid grid-cols-12">
      <ProductTile
        context={context}
        className="col-span-8"
        title="Кредит под залог недвижимости"
        description={'Без переоформления залогой недвижимости на банк'}
        benefits={benefits}
        buttons={buttonsSecondary}
        image={building}
      />
    </div>
  ),
  'pension-credit': (
    <div className="container grid grid-cols-12">
      <ProductTile
        context={context}
        className="col-span-4"
        title="Кредит пенсионный"
        description={'Для людей в возрасте до 75 лет'}
        benefits={benefits}
        buttons={buttonsSecondary}
      />
    </div>
  ),
};
