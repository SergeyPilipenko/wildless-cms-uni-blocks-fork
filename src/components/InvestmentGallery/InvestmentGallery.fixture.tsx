import type { Picture } from '../../model/Picture';
import { context } from '../../react/setup-fixture';
import { InvestmentGallery, InvestmentGalleryProps } from './InvestmentGallery';

const five: Picture = {
  src: '5.svg',
  format: 'webp',
  size: {
    width: 268,
    height: 218,
  },
  title: 'five',
};

const cardListExample = [
  {
    parameter: 'IR',
    parameterDesccription: 'cтрана эмитента',
  },
  {
    parameter: 'RU',
    parameterDesccription: 'страна риска',
  },
  {
    parameter: '09.03.2022',
    parameterDesccription: 'дата погашения',
  },
  {
    parameter: 'Ba3',
    parameterDesccription: 'рейтинг MOODY’S',
  },
  {
    parameter: 'BB-',
    parameterDesccription: 'рейтинг FITCH',
  },
  {
    parameter: 'Borets Finance Designated Activity Company',
    parameterDesccription: 'эмитент',
  },
];

const cardCoomonProps = {
  title: 'Borets Finance DAC 17/09/26',
  description: 'BRTS-26 XS2230649225',
  additionalDescription: 'Краткосрочная',
};

export const shortProps: InvestmentGalleryProps = {
  context,
  title: 'Примеры еврооблигаций (Московская Биржа)',
  cards: [
    {
      ...cardCoomonProps,
      columnsMode: 'double',
      cardList: cardListExample,
      image: five,
    },
    {
      ...cardCoomonProps,
      columnsMode: 'single',
      cardList: cardListExample,
      image: five,
    },
    {
      ...cardCoomonProps,
      columnsMode: 'double',
      cardList: cardListExample,
      image: five,
    },
  ],
};

export default {
  default: (
    <div className="container grid grid-cols-12 mb-1">
      <InvestmentGallery className="col-span-12" {...shortProps} />
    </div>
  ),
};
