import type { Picture } from '../../model/Picture';
import '../../react/setup-fixture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { Gallery } from './Gallery';
import type { GalleryProps } from './GalleryProps';
const isDotted = true;

const image: Picture = {
  src: 'money-1.png',
  format: 'webp',
  size: {
    width: 140,
    height: 140,
  },
  title: 'money',
};

const buttonPrimary: ButtonWithIconProps = {
  href: '/credit-cards',
  text: 'Подробнее',
  target: '_blank',
  version: 'secondary',
};

const buttonPrimaryIcon: ButtonWithIconProps = {
  href: '/credit-cards',
  text: 'Подробнее',
  target: '_blank',
  version: 'secondary',
  icon: { icon: 'BankIcon' },
};

const defaultItems = [
  { text: 'Качественные фермерские продукты напрямую от производителей' },
  { text: 'Самая большая база сельских туров по России' },
  { text: 'Площадки для создания комфортной жизни за городом' },
];

export const defaultProps: GalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',

  cards: [
    {
      title: 'Более 5000 товаров',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      icon: image,
      button: buttonPrimary,
      isDotted,
      items: defaultItems,
      version: 'secondary',
    },
    {
      title: 'Более 1000 развлечений',
      description: 'Порядок и условия предоставления в соответствии с 106 ФЗ',
      icon: image,
      button: buttonPrimaryIcon,
      isDotted,
      items: defaultItems,
    },
    {
      title: 'Фермерские продукты',
      description: 'Высокий процент даже при небольшой сумме денежных средств',
      icon: image,
      button: buttonPrimary,
      isDotted,
      items: defaultItems,
    },
    {
      title: '«Моя выгода»',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      icon: image,
      button: buttonPrimary,
      isDotted,
      items: defaultItems,
    },
  ],
};

const textAndButtonProps: GalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  cards: [
    {
      title: 'Более 5000 товаров',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      icon: image,
      button: buttonPrimary,
    },
    {
      title: 'Более 1000 развлечений',
      description: 'Порядок и условия предоставления в соответствии с 106 ФЗ',
      icon: image,
      button: buttonPrimary,
    },
    {
      title: 'Фермерские продукты',
      description: 'Высокий процент даже при небольшой сумме денежных средств',
      icon: image,
      button: buttonPrimary,
    },
    {
      title: '«Моя выгода»',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      icon: image,
      button: buttonPrimary,
    },
  ],
};

const listAndButtonProps: GalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  cards: [
    {
      title: 'Более 5000 товаров',
      icon: image,
      button: buttonPrimary,
      isDotted,
      items: defaultItems,
    },
    {
      title: 'Более 1000 развлечений',
      icon: image,
      button: buttonPrimary,
      isDotted,
      items: defaultItems,
    },
    {
      title: 'Фермерские продукты',
      icon: image,
      button: buttonPrimary,
      isDotted,
      items: defaultItems,
    },
    {
      title: '«Моя выгода»',
      icon: image,
      button: buttonPrimary,
      isDotted,
      items: defaultItems,
    },
  ],
};

const textAndNoButtonProps: GalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  cards: [
    {
      title: 'Более 5000 товаров',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      icon: image,
    },
    {
      title: 'Более 1000 развлечений',
      description: 'Порядок и условия предоставления в соответствии с 106 ФЗ',
      icon: image,
    },
    {
      title: 'Фермерские продукты',
      description: 'Высокий процент даже при небольшой сумме денежных средств',
      icon: image,
    },
    {
      title: '«Моя выгода»',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      icon: image,
    },
  ],
};

const onlyTitleProps: GalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  cards: [
    {
      title: 'Более 5000 товаров',
      icon: { icon: 'PercentageRoundIcon' },
    },
    {
      title: 'Более 1000 развлечений',
      icon: { icon: 'InterestIcon' },
    },
    {
      title: 'Фермерские продукты',
      icon: { icon: 'WalletIcon' },
      version: 'secondary',
    },
  ],
  button: buttonPrimary,
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...defaultProps} />
    </div>
  ),
  'text and button': (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...textAndButtonProps} />
    </div>
  ),
  'list and button': (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...listAndButtonProps} />
    </div>
  ),
  'text and no button': (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...textAndNoButtonProps} />
    </div>
  ),
  'only title': (
    <div className="container grid grid-cols-12">
      <Gallery className="col-span-12" {...onlyTitleProps} />
    </div>
  ),
};
