import { JSX } from '@redneckz/uni-jsx';
import type { JSXBlock, UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { OtherProductsContent } from './OtherProductsContent';

export interface OtherProductsProps extends OtherProductsContent, UniBlockProps {}

export const OtherProducts: JSXBlock<OtherProductsProps> = JSX<OtherProductsProps>(
  ({ className = '', children, ...rest }) => (
    <BlockWrapper className={`font-sans text-primary-text ${className}`} {...rest}>
      {children}
    </BlockWrapper>
  ),
);

OtherProducts.childrenTypes = ['OtherProductsItem'];
