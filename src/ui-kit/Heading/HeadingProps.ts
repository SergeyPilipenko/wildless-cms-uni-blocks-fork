import type { TitleProp } from '../../model/HeadlineType';

/**
 *
 * @title Размер заголовка
 * @enumNames [
 *   "h0", "h1", "h2", "h3", "h4", "h5", "h6"
 * ]
 */
export type HeadingType = 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

/**
 * @hidden
 */
export type HeadingTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingCommonProps extends TitleProp {
  as?: HeadingTagType;
  headingType?: HeadingType;
}

export interface HeadingProps extends HeadingCommonProps {
  className?: string;
}
