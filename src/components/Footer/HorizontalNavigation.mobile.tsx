import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { LinkProps } from '../../model/LinkProps';
import type { UniBlockProps } from '../../types';
import type { FooterLink } from './FooterLink';

export interface HorizontalNavigationProps extends FooterLink, UniBlockProps {
  title?: string;
}

export const HorizontalNavigation = JSX<HorizontalNavigationProps>(
  ({ title, links, className = '', context }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;

    return (
      <div className={className}>
        <span className="text-primary-text font-sans font-medium text-sm">{title}</span>
        {links?.length ? (
          <div className="flex flex-col gap-2 pt-3">
            {links.map((_, i) => (
              <HorizontalNavigationLink
                key={String(i)}
                index={i}
                {...useLink({ router, handlerDecorator }, _)}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  },
);

interface HorizontalNavigationLinkProps extends LinkProps {
  className: string;
  index: number;
  onClick: (ev: MouseEvent) => any;
}

const HorizontalNavigationLink = JSX<Partial<HorizontalNavigationLinkProps>>(
  ({ className = '', index, text, href, target, onClick }) => (
    <a
      className={`font-sans font-normal text-sm text-secondary-text hover:text-primary-main inline-block no-underline ${className}`}
      href={href}
      target={target}
      onClick={onClick}
    >
      {text || `Документ ${index}`}
    </a>
  ),
);
