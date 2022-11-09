import type { UniBlockProps } from '../../model/ContentPageDef';
import type { LinkProps } from '../../model/LinkProps';

export interface FooterLink extends UniBlockProps {
  links?: LinkProps[];
}
