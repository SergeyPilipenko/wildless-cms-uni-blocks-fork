import type { Picture } from '../../model/Picture';
import type { LinkProps } from '../../model/LinkProps';
import { context } from '../../setup-fixture';
import { Recommendation, RecommendationProps } from './Recommendation';

const creditCard: Picture = {
  src: 'credit-card-1.png',
  format: 'webp',
  size: {
    width: 180,
    height: 180,
  },
  title: 'credit-card-1',
};

const chair: Picture = {
  src: 'chair.png',
  format: 'webp',
  size: {
    width: 180,
    height: 180,
  },
  title: 'chair',
};

const socialMedia: LinkProps[] = [
  { href: 'https://t.me' },
  { href: 'https://vk.com' },
  { href: 'https://ok.ru' },
];

export const defaultProps: RecommendationProps = {
  context,
  title: 'Мы в социальных сетях',
  recommendations: [
    {
      title: 'РоссельхозБанк',
      items: ['Свежие новости', 'Акции и предложения', 'Ставки и катировки'],
      image: chair,
      socialMedia,
    },
    {
      title: 'Своё Родное',
      description: 'Льготный период 120 дней',
      image: creditCard,
      socialMedia,
    },
    {
      title: 'Своё Фермерство',
      description: 'Льготный период 120 дней',
      image: creditCard,
      socialMedia,
    },
    {
      title: 'Кредитные карты',
      description: 'Льготный период 120 дней',
      image: creditCard,
    },
    {
      title: 'Кредитные карты',
      description: 'Льготный период 120 дней',
      image: creditCard,
    },
  ],
};

export default {
  default: (
    <div>
      <div className="container grid grid-cols-12" data-theme="pc">
        <Recommendation className="col-span-12 mb-1" version="secondary" {...defaultProps} />
      </div>

      <div className="container grid grid-cols-12" data-theme="bc">
        <Recommendation className="col-span-12 mb-1" version="secondary" {...defaultProps} />
      </div>

      <div className="container grid grid-cols-12 mb-1">
        <Recommendation className="col-span-12" {...defaultProps} />
      </div>
    </div>
  ),
};
