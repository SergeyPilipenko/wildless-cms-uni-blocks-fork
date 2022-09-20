import { JSX } from '@redneckz/uni-jsx';
import { IconTitleMap } from '../../icons/IconName';
import type { IconVersion } from '../../model/IconVersion';
import { projectSettings } from '../../ProjectSettings';
import type { IconProps } from './IconProps';

const svgUseStyleMap: Record<IconVersion, string> = {
  normal: 'text-primary-main',
  black: 'text-black',
  white: 'text-black invert',
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

    if (asSVG) {
      return (
        <svg className={className} {...imgProps} aria-hidden="true">
          {title ? <title>{title}</title> : null}
          {alt ? <desc>{alt}</desc> : null}
          <use
            className={`${svgUseStyleMap[iconVersion]} ${imageClassName}`}
            href={`${href}#icon`}
            xlinkHref={`${href}#icon`}
          />
        </svg>
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
