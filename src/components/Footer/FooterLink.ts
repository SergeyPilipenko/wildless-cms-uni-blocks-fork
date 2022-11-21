import type { UniBlockProps } from '../../model/JSXBlock';
import type { LinkProps } from '../../model/LinkProps';

export interface FooterLink extends UniBlockProps {
  links?: LinkProps[];
}
