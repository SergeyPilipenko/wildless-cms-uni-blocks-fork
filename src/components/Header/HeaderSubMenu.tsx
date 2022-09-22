import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { BgColorVersion } from '../../model/BgColorVersion';
import type { LinkProps } from '../../model/LinkProps';
import { findActiveSubItem } from '../../services/sitemap/findActiveSubItem';
import { HeaderItem } from '../../ui-kit/HeaderItem/HeaderItem';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import { DropdownMenu } from './DropdownMenu';

export interface HeaderSubMenuProps {
  context: ContentPageContext;
  subItems?: LinkProps[];
  bgColor?: BgColorVersion;
}

export const HeaderSubMenu = JSX<HeaderSubMenuProps>(({ context, subItems = [], bgColor }) => {
  const [menuVisible, setMenuVisible] = context.useState(false);
  const router = context.useRouter();
  const { handlerDecorator, IntersectionObserverTag } = context;

  const [visibleItemsCount, setVisibleItemsCount] = context.useState<number>(subItems.length);
  const dropDownMenuItems = subItems.slice(visibleItemsCount);

  const activeSubItem = findActiveSubItem(router)(subItems);
  const toggleMenu = () => setMenuVisible(!menuVisible);

  const observerCallback = (itemIndex: number) => (entries: IntersectionObserverEntry[]) => {
    if (!entries.length) {
      return;
    }

    const entry = entries[0];

    if (entry.intersectionRatio < 1) {
      setVisibleItemsCount((prev) => Math.min(prev, itemIndex));
    } else {
      setVisibleItemsCount((prev) => Math.max(prev, itemIndex + 1));
    }
  };

  return (
    <nav className="relative mt-5">
      <div className="overflow-hidden whitespace-nowrap mr-52">
        {subItems.map((_, i) => (
          <IntersectionObserverTag
            Tag="span"
            observerCallback={observerCallback(i)}
            observerOptions={{ threshold: 1 }}
            key={String(i)}
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
          menuVisible={menuVisible}
          toggleMenu={toggleMenu}
          menuItems={dropDownMenuItems}
          bgColor={bgColor}
        />
      ) : null}
    </nav>
  );
});
