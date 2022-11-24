import type { Picture } from '../../model/Picture';
import { context } from '../../react/setup-fixture';
import { MiniGallery, MiniGalleryProps } from './MiniGallery';

const image: Picture = {
  src: 'domovoj-kupon.png',
  format: 'webp',
  size: {
    width: 120,
    height: 70,
  },
  title: 'domovoj-kupon',
};

export const defaultProps: MiniGalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  context,
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
    {
      title: 'Более 8888 развлечений',
      description: 'Порядок и условия предоставления в соответствии с 106 ФЗ',
      icon: image,
    },
  ],
};

const onlyTitleProps: MiniGalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  context,
  cards: [
    {
      title: 'Более 5000 товаров',
      icon: image,
    },
    {
      title: 'Более 1000 развлечений',
      icon: image,
    },
    {
      title: 'Фермерские продукты',
      icon: image,
    },
    {
      title: '«Моя выгода»',
      icon: image,
    },
  ],
};

const additionalDescriptionProps: MiniGalleryProps = {
  title: 'Вы можете оплатить бонусными баллами',
  description: 'Удобный каталог с большим ассортиментом товаров и сервисов',
  context,
  cards: [
    {
      title: 'Более 5000 товаров',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      additionalDescription: '01 января 2022',
      icon: image,
    },
    {
      title: 'Более 1000 развлечений',
      description: 'Порядок и условия предоставления в соответствии с 106 ФЗ',
      additionalDescription: '02 февраля 2022',
      icon: image,
    },
    {
      title: 'Фермерские продукты',
      description: 'Высокий процент даже при небольшой сумме денежных средств',
      additionalDescription: '03 марта 2022',
      icon: image,
    },
    {
      title: '«Моя выгода»',
      description:
        'Время копить: ставка растет в зависимости от срока нахождения средств на Счете!',
      additionalDescription: '04 апреля 2022',
      icon: image,
    },
    {
      title: 'Более 8888 развлечений',
      description: 'Порядок и условия предоставления в соответствии с 106 ФЗ',
      additionalDescription: '05 мая 2022',
      icon: image,
    },
  ],
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <MiniGallery className="col-span-12" {...defaultProps} />
    </div>
  ),
  'only title': (
    <div className="container grid grid-cols-12">
      <MiniGallery className="col-span-12" {...onlyTitleProps} />
    </div>
  ),
  'additional description': (
    <div className="container grid grid-cols-12">
      <MiniGallery className="col-span-12" {...additionalDescriptionProps} />
    </div>
  ),
};
