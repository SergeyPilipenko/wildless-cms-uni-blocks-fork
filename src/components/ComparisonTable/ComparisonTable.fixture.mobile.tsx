import type { Picture } from '../../model/Picture';
import { context } from '../../setup-fixture';
import { ComparisonTable } from './ComparisonTable';
import type { Column } from './ComparisonTableContent';

const image1: Picture = {
  src: 'card-1.png',
  format: 'webp',
  size: {
    width: 100,
    height: 63,
  },
};

const image2: Picture = {
  src: 'card-2.png',
  format: 'webp',
  size: {
    width: 100,
    height: 63,
  },
};

const image3: Picture = {
  src: 'card-3.png',
  format: 'webp',
  size: {
    width: 100,
    height: 63,
  },
};

const rowHeaders = [
  { title: 'Начисление процентов на остаток по счету' },
  { title: 'Начисление процентов на остаток по счету' },
  { title: 'Начисление процентов на остаток по счету' },
];
const columns: Column[] = [
  {
    header: {
      title: 'Россельхоз-Росснефть',
      subtitle: 'Менеджер свяжется с вами и согласует встречу',
      image: image1,
      link: {
        text: 'Подробнее',
        href: '#',
      },
    },
    data: [
      [
        {
          label: 'Бесплатно',
          description: 'Мир',
        },
      ],
      [
        {
          label: 'Бесплатно',
          description: 'Мир',
        },
      ],
      [
        {
          label: 'Бесплатно',
          description: 'Мир',
        },
      ],
    ],
  },
  {
    header: {
      title: 'Россельхоз-Росснефть',
      image: image2,
      link: {
        text: 'Подробнее',
        href: '#',
      },
    },
    data: [
      [
        {
          label: 'Бесплатно',
          description: 'Начисление процентов на остаток по счету',
        },
      ],
      [
        {
          label: 'Бесплатно',
          description: 'Начисление',
        },
      ],
      [
        {
          description: 'Начисление процентов на остаток по счету',
        },
      ],
    ],
  },
];
export default {
  default: (
    <div className="container grid grid-cols-12">
      <ComparisonTable
        className="col-span-12"
        title="Другие дебетовые карты Россельхозбанка"
        isColoredFirstColumn={true}
        context={context}
        rowHeaders={rowHeaders}
        orientation="vertical"
        columns={columns}
        visibleRowLength={2}
      />
    </div>
  ),
  'with swiper': (
    <div className="container grid grid-cols-12">
      <ComparisonTable
        className="col-span-12"
        title="Другие дебетовые карты Россельхозбанка"
        isColoredFirstColumn={true}
        context={context}
        rowHeaders={rowHeaders}
        orientation="horizontal"
        columns={Array(2).fill(columns).flat()}
        visibleRowLength={2}
      />
    </div>
  ),
};
