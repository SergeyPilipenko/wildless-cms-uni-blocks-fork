import { JSX } from '@redneckz/uni-jsx';
import { IconTitleMap } from '../../icons/IconName';
import { projectSettings } from '../../ProjectSettings';
import type { IconProps } from './IconProps';

export const Icon = JSX<IconProps>(
  ({
    className = '',
    name = '',
    alt = `Иконка ${IconTitleMap[name] || name}`,
    title = alt,
    iconVersion,
    asSVG,
    ...imgProps
  }) => {
    const href = `${projectSettings.CDN || ''}icons/${name}.svg`;
    const svgUseStyle = iconVersion === 'white' ? 'text-black invert' : '';

    if (asSVG) {
      return (
        <svg className={className} {...imgProps} aria-hidden="true">
          {title ? <title>{title}</title> : null}
          {alt ? <desc>{alt}</desc> : null}
          <use className={svgUseStyle} href={`${href}#icon`} xlinkHref={`${href}#icon`} />
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
