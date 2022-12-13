import { context } from '../../react/setup-fixture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { BusinessBlock } from './BusinessBlock';
import type {
  BusinessBlockContent,
  BusinessCardItemProps,
  BusinessCardProps,
} from './BusinessBlockContent';

const button: ButtonWithIconProps = {
  href: '#',
  text: 'Подробнее',
  target: '_blank',
  version: 'secondary',
};

const items: BusinessCardItemProps[] = [
  {
    icon: { icon: 'RoundRubleIcon' },
    text: 'Пункт 1',
  },
  {
    icon: { icon: 'EmptyWalletIcon' },
    text: 'Пункт 2',
  },
  {
    icon: { icon: 'PercentageSquareIcon' },
    text: 'Пункт 3',
  },
];

const cards: BusinessCardProps[] = [
  {
    image: {
      src: 'business-block-1.png',
      format: 'png',
      size: {
        width: 319,
        height: 230,
      },
      title: 'business-block-1',
    },
    title: 'Заголовок карточки',
    cardItems: items,
    button,
  },
  {
    image: {
      src: 'business-block-2.png',
      format: 'png',
      size: {
        width: 304,
        height: 237,
      },
      title: 'business-block-2',
    },
    title: 'Заголовок карточки',
    cardItems: items,
    button,
  },
];

const PROPS: BusinessBlockContent = {
  title: 'Заголовок блока',
  cards,
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <BusinessBlock className="col-span-12" context={context} {...PROPS} />
    </div>
  ),
};
