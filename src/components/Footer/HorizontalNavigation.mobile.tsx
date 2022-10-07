import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { UniBlockProps } from '../../types';
import type { FooterLink } from './FooterLink';
import { HorizontalNavigationLink } from './HorizontalNavigationLink';

export interface HorizontalNavigationProps extends FooterLink, UniBlockProps {
  title?: string;
}

export const HorizontalNavigation = JSX<HorizontalNavigationProps>(
  ({ title, links, className = '', context }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;

    return (
      <div className={className}>
        <span className="text-primary-text font-medium text-sm">{title}</span>
        {links?.length ? (
          <div className="flex flex-col gap-2 pt-3">
            {links.map((_, i) => (
              <HorizontalNavigationLink
                key={String(i)}
                index={i}
                className="font-normal text-sm"
                {...useLink({ router, handlerDecorator }, _)}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  },
);
