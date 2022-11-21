import { JSX } from '@redneckz/uni-jsx';
import type { Fallback } from '../../model/Fallback';
import type { UniBlockProps } from '../../model/JSXBlock';
import { useSitemap } from '../../services/sitemap/useSitemap';
import { Button } from '../../ui-kit/Button/Button';
import { Img } from '../../ui-kit/Img/Img';
import { SearchBar } from '../../ui-kit/SearchBar/SearchBar';
import { AccordionItemsList } from '../Accordion/AccordionItemsList';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import { LinkList } from '../LinkList/LinkList';
import { MobileAppTile } from '../MobileAppTile/MobileAppTile';
import { Contacts } from './Contacts';
import type { FooterContent, SubMenuItem } from './FooterContent';
import { HorizontalNavigation } from './HorizontalNavigation';
import { SocialMedia } from './SocialMedia';
import { TextInformation } from './TextInformation';

export interface FooterProps extends FooterContent, UniBlockProps {}

export const Footer = JSX<FooterProps>(
  ({
    className = '',
    documents,
    relatedEnterprises,
    contacts,
    socialMedia,
    context,
    horizontalNavigationTitle,
    page,
  }) => {
    const fallback: Fallback | undefined = page?.fallback;
    const sitemap = useSitemap(fallback);
    const dispositions = sitemap?.dispositions;

    return (
      <footer className={`font-sans px-4 py-[26px] bg-white ${className}`}>
        <Contacts className="overflow-hidden" items={contacts} context={context} hasButton />
        <AccordionItemsList>
          {sitemap.topItems?.map((item, i) => (
            <AccordionItem key={String(i)} context={context} label={item.text}>
              <LinkList context={context} documents={item.items} />
            </AccordionItem>
          ))}
        </AccordionItemsList>
        <div>{dispositions?.map(renderSubMenuItem)}</div>
        <MobileAppTile
          context={context}
          title="Мобильное приложение"
          description="Загрузить для IOS и Android"
        />
        <SearchBar context={context} className="grow" />
        <SocialMedia className="pb-4" media={socialMedia} context={context} />
        <HorizontalNavigation
          title={horizontalNavigationTitle}
          links={relatedEnterprises}
          context={context}
        />
        <TextInformation links={documents} context={context} />
      </footer>
    );
  },
);

const renderSubMenuItem = (menu: SubMenuItem, i: number) => {
  const { icon, href, text } = menu;

  return (
    <Button version="link" key={`footer-${i}`} href={href} className="flex text-s mb-4 w-6">
      {icon ? <Img className="pr-1" image={icon} width="24" height="24" asSVG /> : null}
      <span className="pl-2.5 font-medium text-primary-text">{text}</span>
    </Button>
  );
};
