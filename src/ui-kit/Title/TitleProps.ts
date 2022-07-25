export enum SizeTableClass {
  'XL' = 'text-title-lg',
  'L' = 'text-title',
  'M' = 'text-title-sm',
  'S' = 'text-title-xs',
  'XS' = 'text-title-xs',
  '2XS' = 'text-title-2xs',
  '3XS' = 'text-title-3xs',
}

export type TitleSize = keyof typeof SizeTableClass;

export interface TitleProps extends Partial<HTMLHeadingElement> {
  size?: TitleSize;
}
