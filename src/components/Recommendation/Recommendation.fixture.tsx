import type { LinkProps } from '../../model/LinkProps';
import type { Picture } from '../../model/Picture';
import '../../react/setup-fixture';
import { Recommendation, RecommendationProps } from './Recommendation';

const cowCard: Picture = {
  src: 'cow-card.png',
  format: 'webp',
  size: {
    width: 290,
    height: 290,
  },
  title: 'cow-card',
};

const productBasket: Picture = {
  src: 'product-basket.png',
  format: 'webp',
  size: {
    width: 290,
    height: 290,
  },
  title: 'product-basket',
};

const five: Picture = {
  src: '5.svg',
  format: 'webp',
  size: {
    width: 268,
    height: 218,
  },
  title: 'five',
};

const card: Picture = {
  src: '120.png',
  format: 'webp',
  size: {
    width: 268,
    height: 218,
  },
  title: '120',
};

const socialMedia: LinkProps[] = [
  { href: 'https://t.me' },
  { href: 'https://vk.com' },
  { href: 'https://ok.ru' },
];

export const defaultProps: RecommendationProps = {
  title: 'Мы в социальных сетях',
  recommendations: [
    {
      title: 'РоссельхозБанк',
      items: ['Свежие новости', 'Акции и предложения', 'Ставки и котировки'],
      image: cowCard,
      socialMedia,
    },
    {
      title: 'Своё Родное',
      description: 'Льготный период 120 дней',
      image: productBasket,
      socialMedia,
    },
    {
      title: 'Своё Фермерство',
      description: 'Льготный период 120 дней',
      image: cowCard,
      socialMedia,
    },
    {
      title: 'Кредитные карты',
      description: 'Льготный период 120 дней',
      image: productBasket,
    },
    {
      title: 'Кредитные карты',
      description: 'Льготный период 120 дней',
      image: cowCard,
    },
  ],
};

export const shortProps: RecommendationProps = {
  title: 'Также интересуются',
  recommendations: [
    {
      title: 'Кредиты',
      items: ['Свежие новости', 'Акции и предложения', 'Ставки и котировки'],
      image: five,
    },
    {
      title: 'Кредитная карта с длинным заголовком',
      description: 'Льготный период 120 дней',
      image: card,
    },
    {
      title: 'Кредиты',
      items: ['Свежие новости', 'Акции и предложения', 'Ставки и котировки'],
      image: five,
    },
    {
      title: 'Кредитная карта с длинным заголовком',
      description: 'Льготный период 120 дней',
      image: card,
    },
  ],
};

export default {
  default: (
    <div className="container grid grid-cols-12 mb-1">
      <Recommendation className="col-span-12" {...defaultProps} />
    </div>
  ),
  'secondary private clients': (
    <div className="container grid grid-cols-12" data-theme="pc">
      <Recommendation className="col-span-12" {...defaultProps} version="secondary" />
    </div>
  ),
  'secondary business clients': (
    <div className="container grid grid-cols-12" data-theme="bc">
      <Recommendation className="col-span-12" {...defaultProps} version="secondary" />
    </div>
  ),
  'secondary ecosystem own': (
    <div className="container grid grid-cols-12" data-theme="eo">
      <Recommendation className="col-span-12" {...defaultProps} version="secondary" />
    </div>
  ),
  'secondary private short': (
    <div className="container grid grid-cols-12" data-theme="pc">
      <Recommendation className="col-span-12" {...shortProps} version="secondary" />
    </div>
  ),
};
