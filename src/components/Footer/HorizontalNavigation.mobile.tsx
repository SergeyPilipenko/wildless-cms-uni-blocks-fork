import { JSX } from '@redneckz/uni-jsx';
import type { TitleProps } from '../../model/HeadlineType';
import type { FooterLink } from './FooterLink';
import { HorizontalNavigationLink } from './HorizontalNavigationLink';

export interface HorizontalNavigationProps extends FooterLink, TitleProps {}

export const HorizontalNavigation = JSX<HorizontalNavigationProps>(
  ({ title, links, className = '' }) => (
    <div className={className}>
      <span className="text-primary-text text-s font-medium">{title}</span>
      {links?.length ? (
        <div className="flex flex-col gap-2 pt-3">
          {links.map((_, i) => (
            <HorizontalNavigationLink key={String(i)} index={i} className="text-s" {..._} />
          ))}
        </div>
      ) : null}
    </div>
  ),
);
