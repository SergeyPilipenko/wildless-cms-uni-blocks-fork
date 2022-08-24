import type { Picture } from '../../model/Picture';
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

export const defaultProps: RecommendationProps = {
  context,
  title: 'С этим продуктом приобретают',
  recommendations: [
    {
      title: 'Кредиты',
      items: ['до 10 000 000 ₽', 'до 10 лет'],
      image: chair,
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
