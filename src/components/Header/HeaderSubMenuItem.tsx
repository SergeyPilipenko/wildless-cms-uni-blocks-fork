import { JSX } from '@redneckz/uni-jsx';
import { useCallback } from '@redneckz/uni-jsx/lib/hooks';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { BgColorVersion } from '../../model/BgColorVersion';
import type { LinkProps } from '../../model/LinkProps';
import { HeaderItem } from '../../ui-kit/HeaderItem/HeaderItem';

export interface HeaderSubMenuItemProps extends LinkProps {
  className?: string;
  active?: boolean;
  bgColor?: BgColorVersion;
  observerOptions?: IntersectionObserverInit;
  onVisibilityChange?: (isIntersecting: boolean) => void;
}

export const HeaderSubMenuItem = JSX<HeaderSubMenuItemProps>(
  ({ className, active, bgColor, observerOptions, onVisibilityChange, children, ...linkProps }) => {
    const observerCallback = useCallback(
      (entries: IntersectionObserverEntry[]) => {
        if (!entries.length || !onVisibilityChange) {
          return;
        }

        // Assumption about entries order (by time)
        const entry = entries[entries.length - 1];

        onVisibilityChange(entry.isIntersecting);
      },
      [onVisibilityChange],
    );
    const ref = useIntersectionObserver<HTMLSpanElement>(observerCallback, observerOptions);

    return (
      <span ref={ref}>
        <HeaderItem className={className} active={active} bgColor={bgColor} {...linkProps}>
          {children}
        </HeaderItem>
      </span>
    );
  },
);
