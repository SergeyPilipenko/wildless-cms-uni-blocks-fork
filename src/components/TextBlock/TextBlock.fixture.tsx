import type { Picture } from '../../model/Picture';
import '../../react/setup-fixture';
import { TextBlock } from './TextBlock';
import type { TextBlockContent } from './TextBlockContent';

const image: Picture = {
  src: 'bank-card.png',
  format: 'webp',
  size: {
    width: 48,
    height: 48,
  },
};

export const TEXT_BLOCK: TextBlockContent = {
  title: 'Все карты Россельхозбанка работают',
  description:
    /* eslint-disable max-len */
    "Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу можно заказать карту 'Кредитная карта Своя Union Pay' на сайте и в приложении Россельхозбанка",
};

export default {
  'private clients': (
    <div className="container grid grid-cols-12">
      <div className="font-sans overflow-hidden col-span-12">
        <div className="flex flex-col gap-6" data-theme="pc">
          <TextBlock {...TEXT_BLOCK} blockVersion="primary" iconVersion="small" />
          <TextBlock {...TEXT_BLOCK} blockVersion="primary" iconVersion="big" image={image} />
          <TextBlock {...TEXT_BLOCK} blockVersion="primary" iconVersion="none" />
          <TextBlock {...TEXT_BLOCK} blockVersion="primary" iconVersion="small" />
          <TextBlock {...TEXT_BLOCK} blockVersion="secondary" iconVersion="small" />
          <TextBlock {...TEXT_BLOCK} blockVersion="secondary-light" iconVersion="small" />
        </div>
      </div>
    </div>
  ),
  'business clients': (
    <div className="container grid grid-cols-12">
      <div className="font-sans overflow-hidden col-span-12">
        <div className="flex flex-col gap-6" data-theme="bc">
          <TextBlock {...TEXT_BLOCK} blockVersion="primary" iconVersion="small" />
          <TextBlock {...TEXT_BLOCK} blockVersion="secondary" iconVersion="small" />
          <TextBlock {...TEXT_BLOCK} blockVersion="secondary-light" iconVersion="small" />
        </div>
      </div>
    </div>
  ),
  'ecosystem own': (
    <div className="container grid grid-cols-12">
      <div className="font-sans overflow-hidden col-span-12">
        <div className="flex flex-col gap-6" data-theme="eo">
          <TextBlock {...TEXT_BLOCK} blockVersion="primary" iconVersion="small" />
          <TextBlock {...TEXT_BLOCK} blockVersion="secondary" iconVersion="small" />
          <TextBlock {...TEXT_BLOCK} blockVersion="secondary-light" iconVersion="small" />
        </div>
      </div>
    </div>
  ),
};
