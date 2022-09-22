import type { Picture } from '../../model/Picture';
import { mobileContext } from '../../react/setup-fixture';
import { TextBlock } from './TextBlock';
import { TextBlockContent } from './TextBlockContent';

const image: Picture = {
  src: 'bank-card.png',
  format: 'webp',
  size: {
    width: 43,
    height: 43,
  },
};

const items = [
  'Вклады до 1,4 млн застрахованы',
  'Вклады до 1,4 млн застрахованы',
  'Вклады до 1,4 млн застрахованы',
];

export const TEXT_BLOCK: TextBlockContent = {
  title: 'Все карты Россельхозбанка работают',
  description:
    "Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу можно заказать карту 'Кредитная карта Своя Union Pay' на сайте и в приложении Россельхозбанка",
};

export default {
  'private clients': (
    <div className="container grid grid-cols-12">
      <div className="col-span-12">
        <div className="flex flex-col gap-[6px]" data-theme="pc">
          <TextBlock
            context={mobileContext}
            {...TEXT_BLOCK}
            blockVersion="primary"
            iconVersion="small"
          />
          <TextBlock
            context={mobileContext}
            {...TEXT_BLOCK}
            blockVersion="primary"
            iconVersion="big"
            image={image}
          />
          <TextBlock
            context={mobileContext}
            {...TEXT_BLOCK}
            blockVersion="primary"
            iconVersion="none"
          />
          <TextBlock
            context={mobileContext}
            description="Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу"
            blockVersion="primary"
          />
          <TextBlock
            context={mobileContext}
            title="Все карты Россельхозбанка работают"
            blockVersion="primary"
          />
          <TextBlock
            context={mobileContext}
            title="Все карты Россельхозбанка работают"
            blockVersion="primary"
            iconVersion="small"
            items={items}
          />
          <TextBlock
            context={mobileContext}
            title="Все карты Россельхозбанка работают"
            description="Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу"
            blockVersion="secondary"
            iconVersion="small"
            items={items}
          />
          <TextBlock
            context={mobileContext}
            title="Все карты Россельхозбанка работают"
            description="Если не планируете поездку за границу, продолжайте пользоваться картой Своя. Для поездок за границу"
            blockVersion="secondary-light"
            iconVersion="small"
            items={items}
          />
        </div>
      </div>
    </div>
  ),
  'business clients': (
    <div className="container grid grid-cols-12">
      <div className="col-span-12">
        <div className="flex flex-col gap-[6px]" data-theme="bc">
          <TextBlock
            className="flex flex-col"
            context={mobileContext}
            {...TEXT_BLOCK}
            blockVersion="primary"
            iconVersion="small"
          />
          <TextBlock
            context={mobileContext}
            {...TEXT_BLOCK}
            iconVersion="small"
            blockVersion="secondary"
          />
          <TextBlock
            context={mobileContext}
            {...TEXT_BLOCK}
            iconVersion="small"
            blockVersion="secondary-light"
          />
        </div>
      </div>
    </div>
  ),
  'ecosystem own': (
    <div className="container grid grid-cols-12">
      <div className="col-span-12">
        <div className="flex flex-col gap-[6px]" data-theme="eo">
          <TextBlock
            context={mobileContext}
            {...TEXT_BLOCK}
            iconVersion="small"
            blockVersion="primary"
          />
          <TextBlock
            context={mobileContext}
            {...TEXT_BLOCK}
            iconVersion="small"
            blockVersion="secondary"
          />
          <TextBlock
            context={mobileContext}
            {...TEXT_BLOCK}
            iconVersion="small"
            blockVersion="secondary-light"
          />
        </div>
      </div>
    </div>
  ),
};
