import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/JSXBlock';
import { projectSettings } from '../../ProjectSettings';
import type { SitemapDataProps } from '../../services/sitemap/SitemapProps';
import { useSWRResource } from '../../services/sitemap/useSWRResource';
import { Button } from '../../ui-kit/Button/Button';
import { Img } from '../../ui-kit/Img/Img';
import { SearchBar } from '../../ui-kit/SearchBar/SearchBar';
import { getIconWithVersion } from '../../utils/getIconWithVersion';
import { AccordionItemsList } from '../Accordion/AccordionItemsList';
import { AccordionItem } from '../AccordionItem/AccordionItem';
import { LinkList } from '../LinkList/LinkList';
import { MobileAppTile } from '../MobileAppTile/MobileAppTile';
import { Contacts } from './Contacts';
import type { FooterContent, SubMenuItem } from './FooterContent';
import type { FooterDataProps } from './FooterDataProps';
import { HorizontalNavigation } from './HorizontalNavigation';
import { SocialMedia } from './SocialMedia';
import { TextInformation } from './TextInformation';

export interface FooterProps extends FooterContent, UniBlockProps {}

export const Footer = JSX<FooterProps>(({ className = '', ...rest }) => {
  const fallback = rest.page?.fallback;

  const sitemap = useSWRResource<SitemapDataProps>(projectSettings.SITEMAP || 'sitemap', fallback);
  const { documents, relatedEnterprises, contacts, socialMedia, horizontalNavigationTitle } =
    useSWRResource<FooterDataProps>(projectSettings.FOOTER || 'footer', fallback);

  return (
    <footer className={`font-sans px-4 py-[26px] bg-white ${className}`}>
      <Contacts className="overflow-hidden" items={contacts} hasButton />
      <AccordionItemsList>
        {sitemap.topItems?.map((item, i) => (
          <AccordionItem key={String(i)} label={item.text} {...rest}>
            <LinkList documents={item.items} {...rest} />
          </AccordionItem>
        ))}
      </AccordionItemsList>
      <div>{sitemap?.dispositions?.map(renderSubMenuItem)}</div>
      <MobileAppTile
        title="Мобильное приложение"
        description="Загрузить для IOS и Android"
        {...rest}
      />
      <SearchBar className="grow" />
      <SocialMedia className="pb-4" media={socialMedia} />
      <HorizontalNavigation title={horizontalNavigationTitle} links={relatedEnterprises} />
      <TextInformation links={documents} />
    </footer>
  );
});

const renderSubMenuItem = (menu: SubMenuItem, i: number) => {
  const { icon, href, text } = menu;

  return (
    <Button version="link" key={`footer-${i}`} href={href} className="flex text-s mb-4 w-6">
      {icon ? (
        <Img className="pr-1" image={getIconWithVersion(icon)} width="24" height="24" asSVG />
      ) : null}
      <span className="pl-2.5 font-medium text-primary-text">{text}</span>
    </Button>
  );
};
