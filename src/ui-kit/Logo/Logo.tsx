import { JSX } from '@redneckz/uni-jsx';
import type { BgColorVersion } from '../../model/BgColorVersion';
import type { Picture } from '../../model/Picture';
import type { VNode } from '../../model/VNode';
import { Img } from '../Img/Img';

export interface LogoProps {
  className: string;
  href: string;
  targetBlank: boolean;
  bgColor?: string;
  showTitle?: boolean;
  logo?: {
    image?: Picture;
    title?: string;
  };
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
  'bg-white': 'text-primary-text',
  transparent: 'text-white',
};

export const Logo = JSX<Partial<LogoProps>>(
  ({
    className = '',
    href,
    logo,
    children = logo?.title,
    targetBlank,
    bgColor = 'bg-white',
    showTitle = true,
  }) => {
    return (
      <a
        className={`inline-flex items-center font-sans no-underline ${className}`}
        href={href || '/'}
        target={targetBlank ? '_blank' : '_self'}
        aria-label={logo?.title || 'Россельхозбанк'}
      >
        {logo?.image?.src ? (
          <Img image={logo.image} className={SVG_COLOR[bgColor]} width="40" height="45" asSVG />
        ) : (
          <Img
            image={{
              icon: logo?.image?.icon || 'LogoIcon',
              iconVersion: ICON_VERSION_MAP[bgColor],
            }}
            className={`${SVG_COLOR[bgColor]} w-10`}
            width="40"
            height="45"
            asSVG
          />
        )}
        {showTitle ? renderTitle(children, bgColor, logo?.title) : null}
      </a>
    );
  },
);

const renderTitle = (children: VNode, bgColor: string, title?: string) => {
  const text = children || title || 'Россельхозбанк';

  return <span className={`${TEXT_COLOR[bgColor]} font-medium ml-2.5`}>{text}</span>;
};
