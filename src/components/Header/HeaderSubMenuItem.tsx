import { JSX } from '@redneckz/uni-jsx';
import { useCallback } from '@redneckz/uni-jsx/lib/hooks';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useLink } from '../../hooks/useLink';
import type { BgColorVersion } from '../../model/BgColorVersion';
import type { LinkProps } from '../../model/LinkProps';
import { HeaderItem } from '../../ui-kit/HeaderItem/HeaderItem';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';

export interface HeaderSubMenuItemProps extends LinkProps {
  context: ContentPageContext;
  className?: string;
  active?: boolean;
  bgColor?: BgColorVersion;
  observerOptions?: IntersectionObserverInit;
  onVisibilityChange?: (isIntersecting: boolean) => void;
}

export const HeaderSubMenuItem = JSX<HeaderSubMenuItemProps>(
  ({
    context,
    className,
    active,
    bgColor,
    observerOptions,
    onVisibilityChange,
    children,
    ...linkProps
  }) => {
    const { handlerDecorator } = context;
    const router = context.useRouter();

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
        <HeaderItem
          className={className}
          active={active}
          bgColor={bgColor}
          {...useLink({ router, handlerDecorator }, linkProps)}
        >
          {children}
        </HeaderItem>
      </span>
    );
  },
);
