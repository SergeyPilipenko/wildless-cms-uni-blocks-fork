import type { Picture } from '../../model/Picture';
import { ButtonProps } from '../../ui-kit/Button/ButtonProps';
import { CarouselTariffsCard } from './CarouselTariffsCard';
import { CarouselTariffsCardContent } from './CarouselTariffsCardContent';

const imageMonth: Picture = {
  src: 'monthly-payment.png',
  format: 'webp',
  size: {
    width: 266,
    height: 73,
  },
  title: 'money',
};

const button: ButtonProps = {
  href: '/',
  text: 'Открыть расчетный счет',
  target: '_blank',
  version: 'primary',
};

const buttonSecondary: ButtonProps = {
  href: '/',
  text: 'Открыть расчетный счет',
  target: '_blank',
  version: 'secondary',
};

const rows = [
  { title: 'Открытие расчетного счета', description: 'Бесплатно' },
  { title: 'Внутрибанковские платежи', description: '0 ₽' },
  { title: 'Внешние платежи, до 10 шт.', description: '0 ₽' },
  { title: 'От 11 платежей', description: '50 ₽/шт.' },
  {
    title: 'Внесение наличных',
    description: '0% - до 100 000 ₽/мес., далее согласно п.2.4. Тарифов Банка',
  },
  { title: 'Зарплатный проект', description: 'Бесплатно' },
];

export const TARIFFS_CARD: CarouselTariffsCardContent = {
  title: 'Расчётный эконом',
  icon: imageMonth,
  button: buttonSecondary,
  rows,
};

export const TARIFFS_CARD_HIT: CarouselTariffsCardContent = {
  icon: imageMonth,
  title: 'Расчётный эконом',
  button,
  rows,
  isHighlighting: true,
};

const CAROUSEL_TARIFFS_CARD = <CarouselTariffsCard {...TARIFFS_CARD} />;

const CAROUSEL_TARIFFS_CARD_HIT = <CarouselTariffsCard {...TARIFFS_CARD_HIT} />;

export default {
  default: <div className="container grid grid-cols-12">{CAROUSEL_TARIFFS_CARD}</div>,
  hit: <div className="container grid grid-cols-12">{CAROUSEL_TARIFFS_CARD_HIT}</div>,
};
