import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { UniBlockProps } from '../../model/ContentPageDef';
import type { TitleProps } from '../../model/HeadlineType';
import type { FooterLink } from './FooterLink';
import { HorizontalNavigationLink } from './HorizontalNavigationLink';

export interface HorizontalNavigationProps extends FooterLink, UniBlockProps, TitleProps {}

export const HorizontalNavigation = JSX<HorizontalNavigationProps>(
  ({ title, links, className = '', context }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;

    return (
      <div className={className}>
        <span className="text-primary-text text-s font-medium">{title}</span>
        {links?.length ? (
          <div className="flex flex-col gap-2 pt-3">
            {links.map((_, i) => (
              <HorizontalNavigationLink
                key={String(i)}
                index={i}
                className="text-s"
                {...useLink({ router, handlerDecorator }, _)}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  },
);
