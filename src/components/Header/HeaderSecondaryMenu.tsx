import { JSX } from '@redneckz/uni-jsx';
import { useGeolocation } from '../../hooks/useGeolocation';
import type { BgColorVersion } from '../../model/BgColorVersion';
import type { IconVersion } from '../../model/IconVersion';
import { Img } from '../../ui-kit/Img/Img';
import { TopItem } from '../../ui-kit/TopItem/TopItem';
import { HeaderSecondaryMenuButton } from './HeaderSecondaryMenuButton';

interface HeaderSecondaryMenuContent {
  defaultLocation?: string;
  bgColor?: BgColorVersion;
}

export interface HeaderSecondaryMenuProps extends HeaderSecondaryMenuContent {
  className?: string;
}

const COLORS_MAP: Record<BgColorVersion, string> = {
  'bg-white': 'text-primary-text hover:text-primary-main',
  transparent: 'text-white',
};
const LINKS_COLORS_MAP: Record<BgColorVersion, string> = {
  'bg-white': 'text-secondary-light hover:text-secondary-hover',
  transparent: 'text-white',
};
const LINKS_ICON_VERSION_MAP: Record<BgColorVersion, IconVersion> = {
  'bg-white': 'black',
  transparent: 'white',
};

export const HeaderSecondaryMenu = JSX<HeaderSecondaryMenuProps>(
  ({ className, defaultLocation = '', bgColor = 'bg-white' }) => {
    const [city, getCity] = useGeolocation(defaultLocation);

    return (
      <div className={`flex items-center ${className || ''}`}>
        <TopItem
          className="mr-5"
          flat={true}
          href="#"
          text={city}
          ariaLabel="Местоположение"
          onClick={getCity}
          bgColor={bgColor}
        />
        <TopItem
          className="mr-7"
          flat={true}
          href="#"
          text="Офисы и банкоматы"
          ariaLabel="Список всех доступных офисов и банкоматов"
          bgColor={bgColor}
        />
        <HeaderSecondaryMenuButton
          className={`mr-5 group ${COLORS_MAP[bgColor]}`}
          ariaLabel="Поиск по сайту"
        >
          <Img
            image={{ icon: 'LoupeIcon', iconVersion: LINKS_ICON_VERSION_MAP[bgColor] }}
            className="h-full pointer-events-none"
            imageClassName="group-hover:text-primary-hover group-hover:invert-0 pointer-events-none"
            asSVG
          />
        </HeaderSecondaryMenuButton>
        <HeaderSecondaryMenuButton
          className={`${LINKS_COLORS_MAP[bgColor]} group min-w-[32px] min-h-[32px]`}
          ariaLabel="Дополнительные ссылки"
        >
          <Img
            image={{ icon: 'GridIcon', iconVersion: LINKS_ICON_VERSION_MAP[bgColor] }}
            className="h-full bg-main-divider/20 rounded-full pointer-events-none"
            imageClassName="group-hover:text-primary-hover group-hover:invert-0"
            asSVG
          />
        </HeaderSecondaryMenuButton>
      </div>
    );
  },
);
