import type { Picture } from '../../model/Picture';
import { context } from '../../react/setup-fixture';
import type { ButtonCommonProps } from '../../ui-kit/Button/Button';
import { Catalog, CatalogProps } from './Catalog';
import type { CatalogProductColor } from './CatalogContent';

const payRing: Picture = {
  src: 'pay-ring.png',
  format: 'webp',
  size: {
    width: 230,
    height: 230,
  },
  title: 'pay-ring',
};

const colors: CatalogProductColor[] = ['black', 'white'];

const buttonPrimary: ButtonCommonProps = {
  href: '/credit-cards',
  text: 'Подробнее',
  target: '_blank',
  version: 'primary',
};

const catalogCard = {
  title: 'SATURN S-VI',
  description: 'Керамическое кольцо с глянцевой поверхностью и огранкой по внешним контурам',
  image: payRing,
  price: 5600,
  colors: colors,
  button: buttonPrimary,
};

export const defaultProps: CatalogProps = {
  context,
  title: 'Каталог',
  description: 'Описание',
  cards: new Array(5).fill(catalogCard).flat(),
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Catalog {...defaultProps} className="col-span-12" />
    </div>
  ),
};
