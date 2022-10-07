import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Logo } from '../../ui-kit/Logo/Logo';
import { SearchBar } from '../../ui-kit/SearchBar/SearchBar';
import { Contacts } from './Contacts';
import type { FooterContent } from './FooterContent';
import { HorizontalNavigation } from './HorizontalNavigation';
import { Sitemap } from './Sitemap';
import { SocialMedia } from './SocialMedia';
import { TextInformation } from './TextInformation';

const LEFT_COL_WIDTH_FULL_HD = 'w-[204px]';

export interface FooterProps extends FooterContent, UniBlockProps {}

export const Footer = JSX<FooterProps>(
  ({
    className,
    documents,
    relatedEnterprises,
    contacts,
    socialMedia,
    mobileApps,
    topItems,
    context,
    ...rest
  }) => {
    return (
      <BlockWrapper
        tag="footer"
        context={context}
        className={`p-9 bg-white font-sans ${className || ''}`}
        {...rest}
      >
        <div className="flex items-stretch gap-[54px] pb-[30px] xl:gap-8">
          <Logo className={LEFT_COL_WIDTH_FULL_HD} />
          <SearchBar context={context} className="grow" />
        </div>
        <div className="flex items-stretch gap-[54px] xl:gap-8">
          <div className={`${LEFT_COL_WIDTH_FULL_HD} flex flex-col shrink-0 overflow-hidden`}>
            <Contacts items={contacts} context={context} hasButton />
            <SocialMedia media={socialMedia} context={context}>
              Соцсети
            </SocialMedia>
            <SocialMedia className="mt-6" media={mobileApps} context={context}>
              Мобильное приложение
            </SocialMedia>
          </div>
          <Sitemap className="pt-[3px]" context={context} items={topItems} />
        </div>
        <HorizontalNavigation className="mt-[98px]" links={relatedEnterprises} context={context} />
        <TextInformation links={documents} context={context} />
      </BlockWrapper>
    );
  },
);
