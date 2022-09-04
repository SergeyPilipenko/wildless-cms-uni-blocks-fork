import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { BgColorVersion } from '../../model/BgColorVersion';
import { findActiveSubItem } from '../../services/sitemap/findActiveSubItem';
import { isTopItemActive } from '../../services/sitemap/isTopItemActive';
import { mergeTopItems } from '../../services/sitemap/mergeTopItems';
import { useSitemap } from '../../services/sitemap/useSitemap';
import type { UniBlockProps } from '../../types';
import { HeaderItem } from '../../ui-kit/HeaderItem/HeaderItem';
import { Logo } from '../../ui-kit/Logo/Logo';
import { TopItem } from '../../ui-kit/TopItem/TopItem';
import type { HeaderContent } from './HeaderContent';
import { HeaderSecondaryMenu } from './HeaderSecondaryMenu';
import { headerSubMenuObserver } from './HeaderSubMenuObserver';

const BORDER_COLORS: Record<BgColorVersion, string> = {
  'bg-white': 'bg-main-divider',
  transparent: 'bg-main-divider opacity-30',
};

export interface HeaderProps extends HeaderContent, UniBlockProps {}

export const Header = JSX<HeaderProps>(
  ({
    className = '',
    defaultLocation = 'Москва',
    bgColor = 'bg-white',
    context,
    topItems,
    anchor = null,
  }) => {
    setTimeout(() => {
      const headerSubMenu = window.document.querySelectorAll('[data-item-name=header-submenu]');
      headerSubMenu.forEach((_) => {
        headerSubMenuObserver.observe(_);
      });
    }, 200);

    const router = context.useRouter();
    const sitemap = useSitemap(context.useAsyncData);
    const { handlerDecorator } = context;
    const [subMenuIsShow, setHiddenMenuIsShow] = context.useState(false);
    const toggleSubMenu = () => setHiddenMenuIsShow(!subMenuIsShow);

    const mergedItems = mergeTopItems(sitemap.topItems, topItems);
    const activeTopItem = mergedItems.find(isTopItemActive(router));
    const subItems = activeTopItem?.items;
    const activeSubItem = findActiveSubItem(router)(subItems);

    const topMenu = mergedItems.map((_, i) => (
      <TopItem
        key={String(i)}
        active={_ === activeTopItem}
        {...useLink({ router, handlerDecorator }, _)}
        ariaLabel={_.text}
        bgColor={bgColor}
      />
    ));
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
      <header className={`pt-6 pb-8 px-20 ${bgColor} ${className}`} id={anchor}>
        <div className="container">
          <div className="flex items-center">
            <Logo className="mr-8" bgColor={bgColor} />
            {topMenu}
            <HeaderSecondaryMenu
              context={context}
              className="ml-auto"
              defaultLocation={defaultLocation}
              bgColor={bgColor}
            />
          </div>
          <div className={`mt-6 h-[1px] ${BORDER_COLORS[bgColor]}`} />
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
        </div>
      </header>
    );
  },
);

const dot = <div className="w-[3px] h-[3px] rounded bg-black mr-1"></div>;

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
    >
      {Array(3).fill(dot)}
    </button>
    <div className={`flex flex-col rounded-md bg-white p-6 pb-2 ${subMenuIsShow ? '' : 'hidden'}`}>
      {renderDotsSubMenuItems(subItems, router, handlerDecorator)}
    </div>
  </div>
);

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
