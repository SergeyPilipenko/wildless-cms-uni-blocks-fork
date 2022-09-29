import type { Picture } from '../../model/Picture';
import { context } from '../../react/setup-fixture';
import type { BackwardButtonProps, ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { ProductBlock } from './ProductBlock';
import type { ProductBlockBenefit, ProductBlockContent } from './ProductBlockContent';

const image: Picture = {
  src: 'money-1.png',
  format: 'webp',
  alt: 'Потребительский кредит наличными',
  size: {
    width: 280,
    height: 280,
  },
};

const benefits: ProductBlockBenefit[] = [
  {
    label: 'До 5 млн ₽',
    description: 'Кредитный лимит',
    icon: { icon: 'CalendarTickIcon', iconVersion: 'white' },
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

const buttonsSecond: ButtonWithIconProps[] = [
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

const backwardButton: BackwardButtonProps = {
  href: 'https://rshb.ru',
  text: 'Все кредитные карты',
  icon: { icon: 'ArrowLeftIcon' },
};

export const PRODUCT_BLOCK: ProductBlockContent = {
  title: 'Оплата проходит в 180 странах мира',
  headingType: 'h2',
  items,
  buttons: buttons,
};

export default {
  'primary with back button': (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        backwardButton={backwardButton}
        headingType="h1"
        title="Потребительский кредит наличными"
        description="Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт."
        benefits={benefits}
        buttons={buttons}
        image={image}
      />
    </div>
  ),
  'primary with color benefits': (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        title="Потребительский кредит наличными"
        headingType="h2"
        description="Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт."
        benefits={benefits}
        benefitsVersion="white"
        buttons={buttons}
        image={image}
      />
    </div>
  ),
  'primary with list': (
    <div className="container grid grid-cols-12">
      <ProductBlock className="col-span-12" context={context} {...PRODUCT_BLOCK} image={image} />
    </div>
  ),
  'primary without image': (
    <div className="container grid grid-cols-12">
      <ProductBlock className="col-span-12" context={context} {...PRODUCT_BLOCK} />
    </div>
  ),
  'primary with default benefits': (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        title="Потребительский кредит наличными"
        description="Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт."
        benefits={benefits}
        buttons={buttons}
        image={image}
      />
    </div>
  ),
  'secondary with back button': (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        backwardButton={backwardButton}
        headingType="h1"
        title="Потребительский кредит наличными"
        description="Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт."
        benefits={benefits}
        buttons={buttonsSecond}
        image={image}
        version="secondary"
      />
    </div>
  ),
  'secondary with benefits': (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        title="Потребительский кредит наличными"
        headingType="h2"
        description="Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт."
        benefits={benefits}
        benefitsVersion="white"
        buttons={buttonsSecond}
        image={image}
        version="secondary"
      />
    </div>
  ),
  'secondary with list': (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        {...PRODUCT_BLOCK}
        image={image}
        version="secondary"
      />
    </div>
  ),
  'secondary without image': (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        {...PRODUCT_BLOCK}
        version="secondary"
      />
    </div>
  ),
  'secondary without back button': (
    <div className="container grid grid-cols-12">
      <ProductBlock
        className="col-span-12"
        context={context}
        title="Потребительский кредит наличными"
        description="Кредит наличными без залога и поручительства. Потребительский кредит на любые цели. Нужен только паспорт."
        benefits={benefits}
        buttons={buttonsSecond}
        image={image}
        version="secondary"
      />
    </div>
  ),
};
