import { JSX } from '@redneckz/uni-jsx';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { IconName } from '../../ui-kit/Icon/IconProps';
import type { LinkDocsItem } from './LinkDocsContent';

export interface LinkDocsListItemProps {
  className?: string;
  doc: LinkDocsItem;
  icon?: IconName;
}

export interface LinkDocsListItemBaseProps extends LinkDocsListItemProps {
  iconClassName?: string;
  textClassName?: string;
  suffixClassName?: string;
}

export const LinkDocsListItemBase = JSX<LinkDocsListItemBaseProps>(
  ({ className, iconClassName, textClassName, suffixClassName, doc, icon }) => {
    const { text, fileSize, ...linkProps } = doc;
    return (
      <a className={className} role="link" {...linkProps}>
        {icon ? (
          <Icon className={iconClassName} name={icon} width="24px" height="24px" asSVG />
        ) : null}
        {text ? (
          <span className={textClassName}>
            {text}
            <span className={suffixClassName}>
              {linkProps?.href && formatSuffix(getExtFromHref(linkProps.href), fileSize)}
            </span>
          </span>
        ) : null}
      </a>
    );
  },
);

const formatSuffix = (ext?: string, fileSize?: string) => {
  const prefix = ext || fileSize ? ',' : '';
  const extension = ext ? ` ${ext}` : '';
  const size = fileSize ? ` (${fileSize})` : '';
  return prefix + extension + size;
};

const getExtFromHref = (href: string) => {
  if (!href) return '';

  const index = href.lastIndexOf('.');
  return index !== -1 ? href.substring(index + 1) : '';
};
