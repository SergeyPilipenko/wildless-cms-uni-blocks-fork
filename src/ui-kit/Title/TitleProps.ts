export type TitleSize = 'XL' | 'L' | 'M' | 'S' | '2XS' | '3XS';

export interface TitleProps extends Partial<HTMLHeadingElement> {
  size?: TitleSize;
}
