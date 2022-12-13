import type { Picture } from '../../model/Picture';
import '../../react/setup-fixture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
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
  icon: { icon: 'AppleIcon', iconVersion: 'white' },
  href: 'apps.apple.com',
  version: 'primary',
};

const button2: ButtonWithIconProps = {
  aboveText: 'Доступно в',
  text: 'Google Play',
  icon: { icon: 'PlayMarketIcon' },
  href: 'play.google.com',
  version: 'secondary',
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <MobileAppTile
        className="col-span-12"
        version="secondary"
        title="Обновлённое мобильное приложение «Урожай»"
        description="Описание"
        image={image}
        qr={qr}
        headingType="h3"
        items={listItems}
        buttons={[
          {
            ...button1,
            icon: { icon: 'AppleIcon' },
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
      <MobileAppTile className="col-span-4" qr={qr} buttons={[button1, button2]} />
    </div>
  ),
};
