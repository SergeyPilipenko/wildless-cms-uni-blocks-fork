import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import { findActiveSubItem } from '../../services/sitemap/findActiveSubItem';
import { isTopItemActive } from '../../services/sitemap/isTopItemActive';
import { mergeTopItems } from '../../services/sitemap/mergeTopItems';
import { useSitemap } from '../../services/sitemap/useSitemap';
import type { UniBlockProps } from '../../types';
import { HeaderItem } from '../../ui-kit/HeaderItem/HeaderItem';
import type { TopItemProps } from '../../ui-kit/TopItem/TopItem';
import { getAccordionItems } from '../../utils/getAccordionItems';
import { Accordion } from '../Accordion/Accordion';
import { HeaderBurger } from './HeaderBurger';
import type { HeaderContent } from './HeaderContent';
import { HeaderTop } from './HeaderTop';

export interface HeaderProps extends HeaderContent, UniBlockProps {}

export const Header = JSX<HeaderProps>(
  ({ className = '', defaultLocation, bgColor = 'bg-white', context, topItems, burgerSubMenu }) => {
    const router = context.useRouter();
    const sitemap = useSitemap(context.useAsyncData);
    const { handlerDecorator } = context;

    const mergedItems = mergeTopItems(sitemap.topItems, topItems);
    const activeTopItem = mergedItems.find(isTopItemActive(router));
    const subItems = activeTopItem?.items;
    const activeSubItem = findActiveSubItem(router)(subItems);

    const [burgerMenuShow, setBurgerMenuShow] = context.useState(false);

    const toggleBurgerMenu = () => setBurgerMenuShow(!burgerMenuShow);

    return (
      <header className={`${bgColor} ${className}`}>
        <div className="container px-4 py-0 box-border">
          <HeaderTop onClick={toggleBurgerMenu} bgColor={bgColor} />
          <nav className="flex items-center m-0 p-0 overflow-y-hidden w-full h-[50px]">
            <div className="flex no-scrollbar horizontal-list h-full items-center">
              {subItems?.map((_, i) =>
                renderSubItem(
                  {
                    ...useLink({ router, handlerDecorator }, _),
                    active: _ === activeSubItem,
                    bgColor,
                  },
                  i,
                ),
              )}
            </div>
          </nav>
        </div>
        {burgerMenuShow ? (
          <HeaderBurger
            context={context}
            onClick={toggleBurgerMenu}
            burgerSubMenu={burgerSubMenu}
            defaultLocation={defaultLocation}
          >
            <Accordion
              context={context}
              accordionItems={getAccordionItems(topItems)}
              className="p-0 pt-0 pb-0 mb-4"
            />
          </HeaderBurger>
        ) : null}
      </header>
    );
  },
);

const renderSubItem = (item: TopItemProps, i: number) => (
  <HeaderItem key={String(i)} className="mr-8 whitespace-nowrap text-sm" {...item} />
);
