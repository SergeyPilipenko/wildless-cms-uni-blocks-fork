import { JSX } from '@redneckz/uni-jsx';
import { IconInverseMap, IconTitleMap } from '../../icons/IconName';
import type { IconVersion } from '../../model/IconVersion';
import { projectSettings } from '../../ProjectSettings';
import type { IconProps } from './IconProps';

const svgUseStyleMap: Record<IconVersion, string> = {
  normal: 'text-primary-main',
  black: 'text-black',
  white: 'text-black',
};

export const Icon = JSX<IconProps>(
  ({
    className = '',
    imageClassName = '',
    name = '',
    alt = `Иконка ${IconTitleMap[name] || name}`,
    title = alt,
    iconVersion = 'normal',
    asSVG,
    ...imgProps
  }) => {
    const href = `${projectSettings.CDN || ''}icons/${name}.svg`;

    if (asSVG && IconInverseMap[name]) {
      return (
        <Background className={className}>
          <svg
            className={[
              getSvgSize(className, imgProps.width),
              svgUseStyleMap[iconVersion],
              imageClassName,
              getInvertStyle(name, iconVersion),
            ].join(' ')}
            {...imgProps}
            aria-hidden="true"
          >
            {title ? <title>{title}</title> : null}
            {alt ? <desc>{alt}</desc> : null}
            <use href={`${href}#icon`} xlinkHref={`${href}#icon`} />
          </svg>
        </Background>
      );
    }

    return (
      <img
        className={className}
        src={href}
        alt={alt}
        title={title}
        {...imgProps}
        aria-hidden="true"
      />
    );
  },
);

const getInvertStyle = (name: string, iconVersion: IconVersion) =>
  iconVersion === 'white' && IconInverseMap[name] ? 'invert' : '';

const getSvgSize = (className?: string, width?: string) =>
  width ? `width: ${width}px ` : 'w-full h-full';

const Background = JSX<{ className?: string }>(({ className, children }) =>
  className ? <div className={className}>{children}</div> : children,
);
