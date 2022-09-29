import { JSX } from '@redneckz/uni-jsx';
import { BgColorVersion } from '../../model/BgColorVersion';
import type { Picture } from '../../model/Picture';
import { Img } from '../Img/Img';
import { SVG } from '../SVG';

export interface LogoProps {
  className: string;
  href: string;
  targetBlank: boolean;
  bgColor?: string;
  hideTitle?: boolean;
  logo?: {
    image?: Picture;
    title?: string;
  };
}

const LOGO_PATHS = [
  'm13.72 25.51 4.42-4.33v-2.95l-4.42 4.32v2.96Zm0-10.98 4.42-4.35V7.41l-4.42 4.31v2.8Zm0 3.63 4.42-4.33v-2.78l-4.42 4.32v2.8ZM12.46 7.44l-.6-.56V0h-.66v6.22l-.58-.57V0h-.67v5l-.59-.58V0H8.7v6.56l4.44 4.33V0h-.67v7.44Zm1.26 14.35 4.42-4.33v-2.78L13.72 19v2.8Zm-5.03-.61 4.44 4.33v-2.96l-4.44-4.32v2.95Zm8.79-16.76-.59.58V0h-.66v5.66l-.6.56V0h-.66v6.87l-.58.57V0h-.67v10.9l4.42-4.34V0h-.66v4.42Zm-8.79 5.76 4.44 4.35v-2.8L8.69 7.4v2.77Zm0 3.65 4.44 4.33v-2.8l-4.44-4.3v2.77Zm0 3.63 4.44 4.33V19l-4.44-4.31v2.78Zm26.37 2.29H24.3a2.25 2.25 0 0 0 .36-1.22 2.32 2.32 0 0 0-2.33-2.31 2.32 2.32 0 0 0-2.31 2.31c0 .5.16.96.43 1.34a.74.74 0 0 0-.33.61c0 .26.14.49.33.62a2.32 2.32 0 0 0-.43 1.34 2.31 2.31 0 0 0 2.31 2.31 2.32 2.32 0 0 0 2.33-2.31c0-.45-.13-.87-.36-1.22h8.01v.49h-.8v.68h.8v.7h-.8v1.3h.8v-.58h1.17v.58h.79v-1.3h-.79v-.7h.79v-.68h-.79v-.5h1.58a.56.56 0 0 0 .56-.56v-.34a.57.57 0 0 0-.56-.56Zm-11.53 2.7a1.2 1.2 0 0 1-2.4 0c0-.24.08-.47.2-.66l.34-.56a.97.97 0 0 1-.34-.75c0-.3.13-.56.33-.74l-.32-.56a1.13 1.13 0 0 1-.2-.66 1.2 1.2 0 0 1 2.4 0c0 .49-.56 1.65-.56 1.65v.62c-.01.01.55 1.17.55 1.66ZM4.67 18.34v2.89c0 2.75 1.2 4.53 1.9 5.21l4.58 4.5c1.28 1.25 1.5 1.66 1.79 2.37v-3.2c0-2.84-1.44-3.94-2.19-4.67-1.73-1.68-2.89-2.8-3.82-3.73a8.98 8.98 0 0 1-2.26-3.37Zm6.08 14.24c-1.73-1.7-2.89-2.8-3.82-3.73a10 10 0 0 1-2.25-2.98v2.49a7.87 7.87 0 0 0 1.89 5.24l4.58 4.47c1.28 1.25 1.5 1.85 1.79 2.55v-3.37c0-2.85-1.45-3.95-2.19-4.67Z',
  'M19.88 5.34c-.32 0-.64 0-.96.02V6.7a18.5 18.5 0 1 1 .95 36.94A18.5 18.5 0 0 1 1.35 25.17c0-5.67 2.55-10.73 6.58-14.13V9.32A19.78 19.78 0 0 0 0 25.17C0 36.12 8.9 45 19.88 45a19.85 19.85 0 0 0 19.86-19.83c0-10.95-8.9-19.83-19.87-19.83Z',
  'M33.93 35.53c.3-.41.6-.85.87-1.3v-2.66h-.87v3.96Zm2.54-4.92c.12-.4.24-.78.34-1.16h-2.88v.7h.43c.77-.02 1.63-.03 2.11.46Zm-19.19-1.27h-.78v7.91h.78v-7.9Z',
  'M14.7 27.83h2.58c.67 0 1.14.14 1.4.4.27.25.4.72.4 1.38v7.4c0 .66-.12 1.12-.4 1.38-.4.41-1.16.41-1.78.41l-.4-.01v3.5l.78.14v-2.88c1.2 0 1.97-.4 2.34-1.22v4.29h.26l.5-.01V29.74c0-.68.13-1.16.4-1.43.25-.27.72-.4 1.37-.4.67 0 1.65-.1 2.16.4.26.27.38.76.38 1.43v3.8h-1.77v-4.06h-.77v12.99c.26-.03.5-.07.77-.12V34.3h1.77v7.64c.36-.1.72-.21 1.08-.34v-7c0-.8.19-1.4 1-1.67l-.9-4.87h1.8l.3 5.31h.22l.3-5.31h1.88l-1.01 4.87c.84.3 1.01.81 1.01 1.66v4.53a16.63 16.63 0 0 0 1.5-1.27v-9.83h5.25l.1-.72H24.93l.17.89c-.38-.72-1.12-1.08-2.2-1.08h-.77c-1.3 0-2.1.52-2.4 1.55-.27-1.08-1.1-1.62-2.46-1.62h-3.36v14.52c.26.09.52.18.78.25V27.84Zm16.29 5.58-.85-.8.85-4.37v5.17Z',
  'M27.66 40.79c.27-.14.55-.28.8-.43v-5.98h-.8v6.4Z',
];
const SVG_COLOR: Record<BgColorVersion, string> = {
  'bg-white': 'text-primary-main',
  transparent: 'text-white',
};
const TEXT_COLOR: Record<BgColorVersion, string> = {
  'bg-white': 'text-black',
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
    hideTitle,
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
          <SVG
            className={`${SVG_COLOR[bgColor]} w-10`}
            viewBox="0 0 40 45"
            paths={LOGO_PATHS.map((d) => ({ d }))}
          />
        )}
        {hideTitle ? null : renderTitle(children, bgColor, logo?.title)}
      </a>
    );
  },
);

const renderTitle = (children, bgColor, title) => {
  const text = children || title || 'Россельхозбанк';

  return <span className={`${TEXT_COLOR[bgColor]} font-medium ml-2.5`}>{text}</span>;
};
