import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import { HorizontalNavigationLink } from './HorizontalNavigationLink';
import type { UniBlockProps } from '../../types';
import type { FooterLink } from './FooterLink';
import type { TitleProps } from '../../model/HeadlineType';

export interface HorizontalNavigationProps extends FooterLink, UniBlockProps, TitleProps {}

export const HorizontalNavigation = JSX<HorizontalNavigationProps>(
  ({ links, className = '', context }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;

    return (
      <div className={className}>
        {links?.length ? (
          <div className="flex justify-between items-center gap-5 py-5 border-solid border-x-0 border-y border-y-main-divider">
            {links.map((_, i) => (
              <HorizontalNavigationLink
                key={String(i)}
                index={i}
                className="text-l-light max-w-[292px]"
                {...useLink({ router, handlerDecorator }, _)}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  },
);
