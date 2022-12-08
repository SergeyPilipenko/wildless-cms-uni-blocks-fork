import { JSX } from '@redneckz/uni-jsx';
import type { BgColorVersion } from '../../model/BgColorVersion';
import { Img } from '../Img/Img';

export interface LogoProps {
  className: string;
  href: string;
  targetBlank: boolean;
  bgColor?: string;
  showTitle?: boolean;
}

const ICON_VERSION_MAP: Record<BgColorVersion, string> = {
  'bg-white': 'color',
  transparent: 'white',
};

const SVG_COLOR: Record<BgColorVersion, string> = {
  'bg-white': 'text-primary-main',
  transparent: 'text-white',
};

const TEXT_COLOR: Record<BgColorVersion, string> = {
  'bg-white': 'text-black',
  transparent: 'text-white',
};

export const Logo = JSX<Partial<LogoProps>>(
  ({ className = '', href, children, targetBlank, bgColor = 'bg-white', showTitle = true }) => {
    return (
      <a
        className={`inline-flex items-center font-sans no-underline ${className}`}
        href={href || 'https://rshb.ru/'}
        target={targetBlank ? '_blank' : '_self'}
        aria-label="Россельхозбанк"
      >
        <Img
          image={{ icon: 'LogoIcon', iconVersion: ICON_VERSION_MAP[bgColor] }}
          className={`${SVG_COLOR[bgColor]}`}
          width="34"
          height="34"
          asSVG
        />
        {showTitle ? (
          <span className={`${TEXT_COLOR[bgColor]} text-s font-medium ml-2.5`}>
            {children || 'Россельхозбанк'}
          </span>
        ) : null}
      </a>
    );
  },
);
