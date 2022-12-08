import { JSX } from '@redneckz/uni-jsx';
import { useMemo, useRef, useState } from '@redneckz/uni-jsx/lib/hooks';
import type { BgColorVersion } from '../../model/BgColorVersion';
import type { LinkProps } from '../../model/LinkProps';
import { findActiveSubItem } from '../../services/sitemap/findActiveSubItem';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import { DropdownMenu } from './DropdownMenu';
import { HeaderSubMenuItem } from './HeaderSubMenuItem';

export interface HeaderSubMenuProps {
  context: ContentPageContext;
  subItems?: LinkProps[];
  bgColor?: BgColorVersion;
}

export const HeaderSubMenu = JSX<HeaderSubMenuProps>(({ context, subItems = [], bgColor }) => {
  const router = context.useRouter();

  const activeSubItem = findActiveSubItem(router)(subItems);

  const [visibleItemsCount, setVisibleItemsCount] = useState(subItems.length);
  const dropDownMenuItems = subItems.slice(visibleItemsCount);

  const subItemsListRef = useRef<HTMLDivElement | null>(null);
  const observerOptions = useMemo(
    () => ({ threshold: 1, root: subItemsListRef.current }),
    [subItemsListRef.current],
  );
  const subItemsVisibilityHandlers = useMemo(
    () =>
      subItems.map((_, index) => (isIntersecting: boolean) => {
        setVisibleItemsCount(
          isIntersecting
            ? handleIntersectionActivation(index)
            : handleIntersectionDeactivation(index),
        );
      }),
    [subItems],
  );

  return (
    <nav className="relative mt-6">
      <div ref={subItemsListRef} className="overflow-hidden whitespace-nowrap mr-52 pb-3">
        {subItems.map((_, i) => (
          <HeaderSubMenuItem
            key={String(i)}
            context={context}
            className={`mr-8 ${visibleItemsCount - 1 < i ? 'invisible' : ''}`}
            active={_ === activeSubItem}
            bgColor={bgColor}
            observerOptions={observerOptions}
            onVisibilityChange={subItemsVisibilityHandlers[i]}
            {..._}
          />
        ))}
      </div>
      {dropDownMenuItems.length ? (
        <DropdownMenu
          context={context}
          className="absolute w-52 -top-4 right-0 pt-4 z-40"
          items={dropDownMenuItems}
          activeItem={activeSubItem}
          bgColor={bgColor}
        />
      ) : null}
    </nav>
  );
});

const handleIntersectionActivation = (index: number) => (prev: number) => Math.max(prev, index + 1);
const handleIntersectionDeactivation = (index: number) => (prev: number) => Math.min(prev, index);
