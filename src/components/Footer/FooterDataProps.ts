import { LinkCommonProps, LinkProps } from '../../model/LinkProps';
import { SitemapDataProps } from '../../services/sitemap/SitemapProps';
import { ContactInfo, SubMenuItem } from './FooterContent';

export interface FooterDataProps extends SitemapDataProps {
  documents?: LinkProps[];
  relatedEnterprises?: LinkProps[];
  contacts?: ContactInfo[];
  socialMedia?: LinkCommonProps[];
  mobileApps?: LinkCommonProps[];
  horizontalNavigationTitle?: string; // TODO: для мобильной версии
  subMenu?: SubMenuItem[]; // TODO: для мобильной версии
}
