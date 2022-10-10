import { JSX } from '@redneckz/uni-jsx';
import { BgColorVersion } from '../../model/BgColorVersion';
import { Img } from '../Img/Img';

export interface LogoProps {
  className: string;
  href: string;
  targetBlank: boolean;
  bgColor?: string;
  hideTitle?: boolean;
}

const SVG_COLOR: Record<BgColorVersion, string> = {
  'bg-white': 'text-primary-main',
  transparent: 'text-white',
};
const TEXT_COLOR: Record<BgColorVersion, string> = {
  'bg-white': 'text-black',
  transparent: 'text-white',
};

export const Logo = JSX<Partial<LogoProps>>(
  ({ className = '', href, children, targetBlank, bgColor = 'bg-white', hideTitle }) => {
    return (
      <a
        className={`inline-flex items-center font-sans no-underline ${className}`}
        href={href || 'https://rshb.ru/'}
        target={targetBlank ? '_blank' : '_self'}
        aria-label="Россельхозбанк"
      >
        <Img image={{ icon: 'Logo' }} className={`${SVG_COLOR[bgColor]} w-10 h-[38px]`} asSVG />
        {hideTitle ? null : (
          <span className={`${TEXT_COLOR[bgColor]} text-s font-medium ml-2.5`}>
            {children || 'Россельхозбанк'}
          </span>
        )}
      </a>
    );
  },
);
