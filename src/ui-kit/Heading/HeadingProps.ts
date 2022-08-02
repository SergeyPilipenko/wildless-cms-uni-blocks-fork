/**
 *
 * @title Тип заголовка
 * @enumNames [
 *   "h1", "h2", "h3", "h4", "h5", "h6"
 * ]
 */
export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
  className?: string;
  type: HeadingType;
  text?: string;
}
