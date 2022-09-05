import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { BgColorVersion } from '../../model/BgColorVersion';
import type { LinkProps } from '../../model/LinkProps';
import { findActiveSubItem } from '../../services/sitemap/findActiveSubItem';
import { HeaderItem } from '../../ui-kit/HeaderItem/HeaderItem';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import { headerSubMenuObserver } from './HeaderSubMenuObserver';

export interface HeaderSubMenuProps {
  context: ContentPageContext;
  subItems?: LinkProps[];
  bgColor?: BgColorVersion;
}

export const HeaderSubMenu = JSX<HeaderSubMenuProps>(({ context, subItems, bgColor }) => {
  const [subMenuIsShow, setHiddenMenuIsShow] = context.useState(false);
  const router = context.useRouter();
  const { handlerDecorator } = context;

  setTimeout(() => {
    const headerSubMenu = globalThis.document.querySelectorAll('[data-item-name=header-submenu]');
    headerSubMenu.forEach((_) => {
      headerSubMenuObserver?.observe(_);
    });
  }, 200);

  const activeSubItem = findActiveSubItem(router)(subItems);
  const toggleSubMenu = () => setHiddenMenuIsShow(!subMenuIsShow);

  const subMenu = subItems?.map((_) => (
    <HeaderItem
      key={_.href}
      className="mr-8"
      active={_ === activeSubItem}
      {...useLink({ router, handlerDecorator }, _)}
      dataItemName="header-submenu"
      bgColor={bgColor}
    />
  ));

  return (
    <nav className="relative mt-5">
      <div className="overflow-hidden whitespace-nowrap mr-52">{subMenu}</div>
      {renderDotsSubMenu({
        subMenuIsShow,
        toggleSubMenu,
        subItems,
        router,
        handlerDecorator,
      })}
    </nav>
  );
});

// TODO: add types
const renderDotsSubMenu = ({
  subMenuIsShow,
  toggleSubMenu,
  subItems,
  router,
  handlerDecorator,
}) => (
  <div
    className={`absolute w-52 -top-4 right-0 pt-4 z-40 ${
      subMenuIsShow ? 'bg-white rounded-md shadow-blue-gray/24' : ''
    }`}
    data-header-submenu-visible="toggled"
  >
    <button
      className="flex justify-between items-center cursor-pointer h-6 ml-6"
      onClick={toggleSubMenu}
      aria-label={`${subMenuIsShow ? 'Скрыть другие разделы' : 'Показать другие разделы'}`}
    >
      {Array(3)
        .fill(0)
        .map((_, i) => renderDot(i))}
    </button>
    <div
      className={`flex flex-col rounded-md bg-white p-6 pb-2 ${subMenuIsShow ? '' : 'hidden'}`}
      aria-hidden={!subMenuIsShow}
    >
      {renderDotsSubMenuItems(subItems, router, handlerDecorator)}
    </div>
  </div>
);

// TODO: add types
const renderDotsSubMenuItems = (subItems, router, handlerDecorator) =>
  subItems?.map((_) => (
    <a
      key={_.href}
      {...useLink({ router, handlerDecorator }, _)}
      data-item-name="dots-header-submenu"
      className="text-base font-light pb-4 hover:text-primary-main"
    >
      {_.text}
    </a>
  ));

const renderDot = (i: number) => (
  <div key={String(i)} className="w-[3px] h-[3px] rounded bg-black mr-1" />
);
