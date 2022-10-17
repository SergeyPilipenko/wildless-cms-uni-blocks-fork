import type { TitleProps } from '../../model/HeadlineType';

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

export interface HeadingCommonProps extends TitleProps {
  as?: HeadingTagType;
  headingType?: HeadingType;
}

export interface HeadingProps extends HeadingCommonProps {
  /**
   * @hidden
   */
  className?: string;
}
