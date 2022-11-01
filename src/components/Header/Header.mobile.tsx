import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import { useLink } from '../../hooks/useLink';
import { findActiveSubItem } from '../../services/sitemap/findActiveSubItem';
import { isTopItemActive } from '../../services/sitemap/isTopItemActive';
import { mergeTopItems } from '../../services/sitemap/mergeTopItems';
import { useSitemap } from '../../services/sitemap/useSitemap';
import type { UniBlockProps } from '../../types';
import type { Fallback } from '../../types/Fallback';
import { HeaderItem } from '../../ui-kit/HeaderItem/HeaderItem';
import type { TopItemProps } from '../../ui-kit/TopItem/TopItem';
import { getAccordionItems } from '../../utils/getAccordionItems';
import { Accordion } from '../Accordion/Accordion';
import { HeaderBurger } from './HeaderBurger';
import type { HeaderContent } from './HeaderContent';
import { HeaderTop } from './HeaderTop';

export interface HeaderProps extends HeaderContent, UniBlockProps {}

export const Header = JSX<HeaderProps>(
  ({ className = '', defaultLocation, bgColor = 'bg-white', context, topItems, page }) => {
    const router = context.useRouter();
    const fallback: Fallback | undefined = page?.fallback;
    const sitemap = useSitemap(fallback);
    const dispositions = sitemap?.dispositions;
    const { handlerDecorator } = context;

    const mergedItems = mergeTopItems(sitemap.topItems, topItems);
    const activeTopItem = mergedItems.find(isTopItemActive(router));
    const subItems = activeTopItem?.items;
    const activeSubItem = findActiveSubItem(router)(subItems);
    const [burgerMenuShow, setBurgerMenuShow] = useState(false);
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
            burgerSubMenu={dispositions}
            defaultLocation={defaultLocation}
          >
            <Accordion
              context={context}
              accordionItems={getAccordionItems(sitemap.topItems)}
              className="!p-0 mb-4"
            />
          </HeaderBurger>
        ) : null}
      </header>
    );
  },
);

const renderSubItem = (item: TopItemProps, i: number) => (
  <HeaderItem key={String(i)} className="mr-8 whitespace-nowrap text-s" {...item} />
);
