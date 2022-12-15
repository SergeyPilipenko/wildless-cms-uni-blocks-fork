import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import { useRouter } from '../../hooks/useRouter';
import type { Fallback } from '../../model/Fallback';
import type { UniBlockProps } from '../../model/JSXBlock';
import { projectSettings } from '../../ProjectSettings';
import { findActiveSubItem } from '../../services/sitemap/findActiveSubItem';
import { isTopItemActive } from '../../services/sitemap/isTopItemActive';
import type { SitemapDataProps } from '../../services/sitemap/SitemapProps';
import { useSWRResource } from '../../services/sitemap/useSWRResource';
import { HeaderItem } from '../../ui-kit/HeaderItem/HeaderItem';
import { AccordionItemsList } from '../Accordion/AccordionItemsList';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import { LinkList } from '../LinkList/LinkList';
import { HeaderBurger } from './HeaderBurger';
import type { HeaderContent } from './HeaderContent';
import { HeaderTop } from './HeaderTop';

export interface HeaderProps extends HeaderContent, UniBlockProps {}

export const Header = JSX<HeaderProps>(({ className = '', bgColor = 'bg-white', ...rest }) => {
  const router = useRouter();

  const { page } = rest;
  const fallback: Fallback | undefined = page?.fallback;
  const { topItems, dispositions, defaultLocation } = useSWRResource<SitemapDataProps>(
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
            {subItems?.map((_, i) => (
              <HeaderItem
                key={String(i)}
                className="mr-8 whitespace-nowrap text-s"
                active={_ === activeSubItem}
                bgColor={bgColor}
                {..._}
              />
            ))}
          </div>
        </nav>
      </div>
      {burgerMenuShow ? (
        <HeaderBurger
          onClick={toggleBurgerMenu}
          burgerSubMenu={dispositions}
          defaultLocation={defaultLocation}
        >
          <AccordionItemsList>
            {topItems?.map((item, i) => (
              <AccordionItem key={String(i)} label={item.text} {...rest}>
                <LinkList documents={item.items} {...rest} />
              </AccordionItem>
            ))}
          </AccordionItemsList>
        </HeaderBurger>
      ) : null}
    </header>
  );
});
