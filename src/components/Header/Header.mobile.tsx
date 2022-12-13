import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import { useLink } from '../../hooks/useLink';
import type { Fallback } from '../../model/Fallback';
import type { UniBlockProps } from '../../model/JSXBlock';
import { projectSettings } from '../../ProjectSettings';
import { findActiveSubItem } from '../../services/sitemap/findActiveSubItem';
import { isTopItemActive } from '../../services/sitemap/isTopItemActive';
import type { SitemapDataProps } from '../../services/sitemap/SitemapProps';
import { useSWRResource } from '../../services/sitemap/useSWRResource';
import { HeaderItem } from '../../ui-kit/HeaderItem/HeaderItem';
import type { TopItemProps } from '../../ui-kit/TopItem/TopItem';
import { AccordionItemsList } from '../Accordion/AccordionItemsList';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import { LinkList } from '../LinkList/LinkList';
import { HeaderBurger } from './HeaderBurger';
import type { HeaderContent } from './HeaderContent';
import { HeaderTop } from './HeaderTop';

export interface HeaderProps extends HeaderContent, UniBlockProps {}

export const Header = JSX<HeaderProps>(
  ({ className = '', defaultLocation, bgColor = 'bg-white', context, page }) => {
    const { handlerDecorator } = context;
    const router = context.useRouter();

    const fallback: Fallback | undefined = page?.fallback;
    const { topItems, dispositions } = useSWRResource<SitemapDataProps>(
      projectSettings.SITEMAP || 'sitemap',
      fallback,
    );

    const activeTopItem = topItems?.find(isTopItemActive(router));
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
            <AccordionItemsList>
              {topItems?.map((item, i) => {
                item?.text ? (
                  <AccordionItem key={String(i)} context={context} label={item.text}>
                    <LinkList context={context} documents={item.items} />
                  </AccordionItem>
                ) : null;
              })}
            </AccordionItemsList>
          </HeaderBurger>
        ) : null}
      </header>
    );
  },
);

const renderSubItem = (item: TopItemProps, i: number) => (
  <HeaderItem key={String(i)} className="mr-8 whitespace-nowrap text-s" {...item} />
);
