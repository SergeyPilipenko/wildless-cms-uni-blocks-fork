import { context } from '../../react/setup-fixture';

import type { Picture } from '../../model/Picture';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';
import { ProductTile } from './ProductTile';
import type { ProductTileContent } from './ProductTileContent';

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

const letterWithPhone: Picture = {
  src: 'letter-with-phone.png',
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

const benefits2 = [
  {
    label: '1 год',
    description: 'срок программы',
  },
];

const buttons: ButtonProps[] = [
  {
    text: 'Подробнее',
    href: '/credit-cards',
    version: 'secondary',
  },
];

const buttons2: ButtonProps[] = [
  {
    href: 'https://rshb.ru',
    text: 'Подробнее',
    target: '_blank',
    version: 'secondary',
  },
];

const buttons3: ButtonProps[] = [
  {
    href: 'https://rshb.ru',
    text: 'Оформить',
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

export const PRODUCT_TILE: ProductTileContent = {
  title: 'Акция! “Кредит На все, что хочется!”',
  headlineVersion: 'S',
  description: 'Потребительский кредит на любые цели, без залога и поручительства',
  benefits,
  buttons: buttons,
  image: cardWithMoney,
};
export const PRODUCT_PENSION_TILE: ProductTileContent = {
  title: 'Кредит пенсионный',
  headlineVersion: 'S',
  description: 'Для людей в возрасте до 75 лет',
  benefits,
  buttons: buttons2,
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
        buttons={buttons2}
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
        buttons={buttons2}
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
        buttons={buttons2}
      />
    </div>
  ),
  'with-add-desc': (
    <div className="container grid grid-cols-12">
      <ProductTile
        context={context}
        className="col-span-6"
        title="Ипотечное страхование"
        description={'Финансовая защита заемщиков в случае непредвиденных обстоятельств'}
        additionalDescription={
          'Страховая сумма и страховой взнос зависит от остатка задолженности по ипотеке'
        }
        benefits={benefits2}
        buttons={buttons3}
        image={letterWithPhone}
      />
    </div>
  ),
};
