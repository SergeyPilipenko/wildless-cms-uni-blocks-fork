import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Accordion } from '../Accordion/Accordion';
import { MobileAppTile } from '../MobileAppTile/MobileAppTile';
import { Contacts } from './Contacts';
import type { FooterContent, SubMenuItem } from './FooterContent';
import { HorizontalNavigation } from './HorizontalNavigation';
import { SocialMedia } from './SocialMedia';
import { TextInformation } from './TextInformation';

import { useSitemap } from '../../services/sitemap/useSitemap';
import { Button } from '../../ui-kit/Button/Button';
import { Icon } from '../../ui-kit/Icon/Icon';
import { SearchBar } from '../../ui-kit/SearchBar/SearchBar';
import { getAccordionItems } from '../../utils/getAccordionItems';

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
  }) => {
    const sitemap = useSitemap(context.useAsyncData);
    const dispositions = sitemap?.dispositions;
    return (
      <footer className={`px-4 py-[26px] bg-white ${className}`}>
        <Contacts className="overflow-hidden" items={contacts} context={context} hasButton />
        <Accordion
          context={context}
          className="!p-0 mb-4"
          accordionItems={getAccordionItems(sitemap.topItems)}
        />
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
    <Button version="link" key={`footer-${i}`} href={href} className="flex text-sm mb-4">
      {icon ? <Icon className="pr-1" name={icon} width="24" height="24" asSVG /> : null}
      <span className="pl-2.5 font-medium text-primary-text">{text}</span>
    </Button>
  );
};
