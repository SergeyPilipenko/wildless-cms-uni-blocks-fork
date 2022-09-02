import type { Picture } from '../../model/Picture';
import { context } from '../../setup-fixture';
import { Tile } from './Tile';
import type { TileContent } from './TileContent';

const image: Picture = {
  src: 'from-5-5-percent.svg',
  format: 'webp',
  size: {
    width: 445,
    height: 202,
  },
};

const image2: Picture = {
  src: 'credit-card-1.png',
  format: 'webp',
};

const image3: Picture = {
  src: 'column-1.png',
  format: 'webp',
};

const image4: Picture = {
  src: 'globe-1.png',
  format: 'webp',
};

export const TILE: TileContent = {
  title: 'Кредиты',
  items: ['до 3 млн ₽', 'до 5 лет'],
  buttons: [
    {
      text: 'Подробнее',
      href: '/credit-cards',
      version: 'secondary',
    },
  ],
  image,
};

export const TILE_PREMIUM: TileContent = {
  title: 'Премиальные продукты',
  description:
    'Выделенные зоны обслуживания и персональный финансовый консультант. Полный спектр премиальных продуктов, подчеркивающих ваш статус',
  buttons: [
    {
      href: 'https://rshb.ru',
      text: 'Подробнее',
      target: '_blank',
      version: 'secondary',
    },
  ],
  image: image3,
};

export default {
  credit: (
    <div className="container grid grid-cols-12">
      <Tile context={context} className="col-span-8" {...TILE} />
    </div>
  ),
  mortgage: (
    <div className="container grid grid-cols-12">
      <Tile
        context={context}
        version="secondary"
        className="col-span-4"
        title="Ипотека"
        items={[
          'Качественные фермерские продукты напрямую от производителей',
          'Самая большая база сельских туров по России',
          'Площадки для создания комфортной жизни за городом',
          'Подробная база вакансий для жителей сельской местности',
        ]}
        buttons={[
          {
            href: 'https://rshb.ru',
            text: 'Подробнее',
            target: '_blank',
            version: 'secondary',
          },
        ]}
      />
    </div>
  ),
  'credit-card': (
    <div className="container grid grid-cols-12">
      <Tile
        context={context}
        className="col-span-6"
        title="Банковские пластиковые карты"
        items={['Счета в разных валютах', 'Бесплатное обслуживание', 'Кэшбэк до 15% от покупок']}
        buttons={[
          {
            href: 'https://rshb.ru',
            text: 'Подробнее',
            target: '_blank',
            version: 'secondary',
          },
        ]}
        image={image2}
      />
    </div>
  ),
  premium: (
    <div className="container grid grid-cols-12">
      <Tile context={context} className="col-span-6" {...TILE_PREMIUM} />
    </div>
  ),
  ecosystem: (
    <div className="container grid grid-cols-12">
      <Tile
        context={context}
        className="col-span-12 pr-28"
        title="Экосистема «СВОЕ», созданная для людей"
        items={[
          'Качественные фермерские продукты напрямую от производителей',
          'Самая большая база сельских туров по России',
          'Площадки для создания комфортной жизни за городом',
          'Подробная база вакансий для жителей сельской местности',
        ]}
        buttons={[
          {
            href: 'https://rshb.ru',
            text: 'Подробнее',
            target: '_blank',
            version: 'secondary',
          },
        ]}
        image={image4}
      />
    </div>
  ),
};
