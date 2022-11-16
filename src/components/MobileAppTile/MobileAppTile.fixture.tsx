import type { IconVersion } from '../../model/IconVersion';
import type { Picture } from '../../model/Picture';
import { context } from '../../react/setup-fixture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { Img } from '../../ui-kit/Img/Img';
import { MobileAppTile } from './MobileAppTile';

const image: Picture = {
  src: 'icon-phone.png',
  format: 'webp',
  size: {
    width: 529,
    height: 345,
  },
};

const qr: Picture = {
  src: 'qr.png',
  format: 'webp',
  size: {
    width: 92,
    height: 92,
  },
  title: 'qr',
};

const listItems = [
  'Оплачивайте товары и услуги',
  'Следите за бонусным счетом онлайн',
  'Покупайте товары и услуги',
  'Копите бонусные баллы',
];

const button1: ButtonWithIconProps = {
  aboveText: 'Загрузите в',
  text: 'App Store',
  appendLeft: (
    <Img
      image={{ icon: 'AppleIcon', iconVersion: 'white' as IconVersion }}
      width="24"
      height="24"
      asSVG
    />
  ),
  href: 'apps.apple.com',
  version: 'primary',
};

const button2: ButtonWithIconProps = {
  aboveText: 'Доступно в',
  text: 'Google Play',
  appendLeft: <Img image={{ icon: 'PlayMarketIcon' }} width="24" height="24" asSVG />,
  href: 'play.google.com',
  version: 'secondary',
};

const icon = <Img image={{ icon: 'AppleIcon' }} width="24" height="24" asSVG />;

export default {
  default: (
    <div className="container grid grid-cols-12">
      <MobileAppTile
        context={context}
        className="col-span-12"
        version="secondary"
        title="Обновлённое мобильное приложение «Урожай»"
        image={image}
        qr={qr}
        headingType="h3"
        items={listItems}
        buttons={[
          {
            ...button1,
            appendLeft: icon,
            version: 'secondary',
          },
          button2,
        ]}
      />
    </div>
  ),
  secondary: (
    <div className="container grid grid-cols-12">
      <MobileAppTile
        context={context}
        className="col-span-12"
        title="Обновлённое мобильное приложение «Урожай»"
        qr={qr}
        headingType="h3"
        items={listItems}
        buttons={[button1, button2]}
      />
    </div>
  ),
  'without-image': (
    <div className="container grid grid-cols-12">
      <MobileAppTile
        context={context}
        className="col-span-12"
        title="Обновлённое мобильное приложение «Урожай»"
        qr={qr}
        headingType="h3"
        items={listItems}
        buttons={[button1, button2]}
      />
    </div>
  ),
  'without-image-and-list': (
    <div className="container grid grid-cols-12">
      <MobileAppTile
        context={context}
        className="col-span-4"
        qr={qr}
        buttons={[button1, button2]}
      />
    </div>
  ),
};
