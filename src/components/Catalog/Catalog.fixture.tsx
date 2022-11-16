import type { IconVersion } from '../../model/IconVersion';
import type { Picture } from '../../model/Picture';
import type { ProductColorVersion } from '../../model/ProductColorVersion';
import { context } from '../../react/setup-fixture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { Img } from '../../ui-kit/Img/Img';
import { Catalog, CatalogProps } from './Catalog';

const payRing: Picture = {
  src: 'pay-ring.png',
  format: 'webp',
  size: {
    width: 230,
    height: 230,
  },
  title: 'pay-ring',
};

const colors: ProductColorVersion[] = ['black', 'white'];

const buttonPrimary: ButtonWithIconProps = {
  href: '/credit-cards',
  text: 'Подробнее',
  target: '_blank',
  version: 'primary',
  appendLeft: (
    <Img
      image={{ icon: 'AppleIcon', iconVersion: 'primary' as IconVersion }}
      width="24"
      height="24"
      asSVG
    />
  ),
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
