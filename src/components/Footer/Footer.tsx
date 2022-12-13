import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/JSXBlock';
import { projectSettings } from '../../ProjectSettings';
import { useSWRResource } from '../../services/sitemap/useSWRResource';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Logo } from '../../ui-kit/Logo/Logo';
import { SearchBar } from '../../ui-kit/SearchBar/SearchBar';
import { Contacts } from './Contacts';
import type { FooterContent } from './FooterContent';
import type { FooterDataProps } from './FooterDataProps';
import { HorizontalNavigation } from './HorizontalNavigation';
import { Sitemap } from './Sitemap';
import { SocialMedia } from './SocialMedia';
import { TextInformation } from './TextInformation';

const LEFT_COL_WIDTH_FULL_HD = 'w-[204px]';

export interface FooterProps extends FooterContent, UniBlockProps {}

export const Footer = JSX<FooterProps>(({ className, ...rest }) => {
  const fallback = rest.page?.fallback;

  const { documents, relatedEnterprises, contacts, socialMedia, mobileApps, topItems } =
    useSWRResource<FooterDataProps>(projectSettings.FOOTER || 'footer', fallback);

  return (
    <BlockWrapper tag="footer" className={`p-9 bg-white font-sans ${className || ''}`} {...rest}>
      <div className="flex items-stretch gap-[54px] pb-[30px] xl:gap-8">
        <Logo className={LEFT_COL_WIDTH_FULL_HD} />
        <SearchBar className="grow" />
      </div>
      <div className="flex items-stretch gap-[54px] xl:gap-8">
        <div className={`${LEFT_COL_WIDTH_FULL_HD} flex flex-col shrink-0 overflow-hidden`}>
          <Contacts items={contacts} hasButton />
          <SocialMedia media={socialMedia}>Соцсети</SocialMedia>
          <SocialMedia className="mt-6" media={mobileApps}>
            Мобильное приложение
          </SocialMedia>
        </div>
        <Sitemap className="pt-[3px]" items={topItems} fallback={fallback} />
      </div>
      <HorizontalNavigation className="mt-[98px]" links={relatedEnterprises} />
      <TextInformation links={documents} />
    </BlockWrapper>
  );
});
