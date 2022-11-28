import { JSX } from '@redneckz/uni-jsx';
import { useMemo, useRef, useState } from '@redneckz/uni-jsx/lib/hooks';
import { useLink } from '../../hooks/useLink';
import type { BgColorVersion } from '../../model/BgColorVersion';
import type { LinkProps } from '../../model/LinkProps';
import { findActiveSubItem } from '../../services/sitemap/findActiveSubItem';
import { HeaderItem } from '../../ui-kit/HeaderItem/HeaderItem';
import { IntersectionObserverTag } from '../../ui-kit/IntersectionObserverTag';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import { DropdownMenu } from './DropdownMenu';

export interface HeaderSubMenuProps {
  context: ContentPageContext;
  subItems?: LinkProps[];
  bgColor?: BgColorVersion;
}

export const HeaderSubMenu = JSX<HeaderSubMenuProps>(({ context, subItems = [], bgColor }) => {
  const { handlerDecorator } = context;
  const router = context.useRouter();

  const subItemsListRef = useRef<HTMLDivElement | null>(null);

  const [menuVisible, setMenuVisible] = useState(false);

  const [visibleItemsCount, setVisibleItemsCount] = useState(subItems.length);
  const dropDownMenuItems = subItems.slice(visibleItemsCount);

  const observerOptions = useMemo(
    () => ({ threshold: 1, root: subItemsListRef.current }),
    [subItemsListRef.current],
  );

  const observerCallbacks = useMemo(
    () =>
      subItems.map((_, index) => (entries: IntersectionObserverEntry[]) => {
        if (!entries.length) {
          return;
        }

        // Assumption about sorting entries by time
        const entry = entries[entries.length - 1];

        if (entry.isIntersecting) {
          setVisibleItemsCount(handleIntersectionActivation(index));
        } else {
          setVisibleItemsCount(handleIntersectionDeactivation(index));
        }
      }),
    [subItems],
  );

  const activeSubItem = findActiveSubItem(router)(subItems);
  const toggleMenu = () => setMenuVisible(!menuVisible);

  return (
    <nav className="relative mt-6">
      <div ref={subItemsListRef} className="overflow-hidden whitespace-nowrap mr-52 pb-3">
        {subItems.map((_, i) => (
          <IntersectionObserverTag
            key={String(i)}
            tag="span"
            observerCallback={observerCallbacks[i]}
            observerOptions={observerOptions}
          >
            <HeaderItem
              className={`mr-8 ${visibleItemsCount - 1 < i ? 'invisible' : ''}`}
              active={_ === activeSubItem}
              {...useLink({ router, handlerDecorator }, _)}
              bgColor={bgColor}
            />
          </IntersectionObserverTag>
        ))}
      </div>
      {dropDownMenuItems.length ? (
        <DropdownMenu
          context={context}
          activeSubItem={activeSubItem}
          menuVisible={menuVisible}
          toggleMenu={toggleMenu}
          menuItems={dropDownMenuItems}
          bgColor={bgColor}
        />
      ) : null}
    </nav>
  );
});

const handleIntersectionActivation = (index: number) => (prev: number) => Math.max(prev, index + 1);
const handleIntersectionDeactivation = (index: number) => (prev: number) => Math.min(prev, index);
