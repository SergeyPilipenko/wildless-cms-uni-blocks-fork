import type { UniBlockProps } from '../../model/ContentPageDef';
import type { AccordionItemCommonProps } from './AccordionContent';

export interface AccordionItemProps extends AccordionItemCommonProps, UniBlockProps {
  hasContent?: boolean;
}
