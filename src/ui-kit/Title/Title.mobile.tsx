import { JSX } from '@redneckz/uni-jsx';
import { TitleSize, TitleProps } from './TitleProps';

export const SizeTableClass: Record<TitleSize, string> = {
  XL: 'text-m-title',
  L: 'text-m-title',
  M: 'text-m-title-md',
  S: 'text-m-title-xs',
  '2XS': 'text-m-title-xs',
  '3XS': 'text-m-title-xs',
};

export const Title = JSX<TitleProps>(({ size = 'L', className, children, ...rest }) => {
  const Tag = size === 'XL' || size === 'L' ? 'h1' : 'h2';
  return (
    <Tag className={getClasses(SizeTableClass[size], className)} {...rest}>
      {children}
    </Tag>
  );
});

const getClasses = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');
