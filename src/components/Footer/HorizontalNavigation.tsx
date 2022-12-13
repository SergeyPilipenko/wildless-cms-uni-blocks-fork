import { JSX } from '@redneckz/uni-jsx';
import type { TitleProps } from '../../model/HeadlineType';
import type { FooterLink } from './FooterLink';
import { HorizontalNavigationLink } from './HorizontalNavigationLink';

export interface HorizontalNavigationProps extends FooterLink, TitleProps {}

export const HorizontalNavigation = JSX<HorizontalNavigationProps>(({ className = '', links }) => {
  return (
    <div className={className}>
      {links?.length ? (
        <div className="flex justify-between items-center gap-5 py-5 border-solid border-x-0 border-y border-y-main-divider">
          {links.map((_, i) => (
            <HorizontalNavigationLink
              key={String(i)}
              index={i}
              className="text-l-light max-w-[292px]"
              {..._}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
});
