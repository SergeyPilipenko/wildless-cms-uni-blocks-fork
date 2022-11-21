import { JSX } from '@redneckz/uni-jsx';
import type { JSXBlock, UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { OtherProductsContent } from './OtherProductsContent';

export interface OtherProductsProps extends OtherProductsContent, UniBlockProps {}

export const OtherProducts: JSXBlock<OtherProductsProps> = JSX<OtherProductsProps>(
  ({ context, className = '', children, ...rest }) => (
    <BlockWrapper
      context={context}
      className={`font-sans text-primary-text ${className}`}
      {...rest}
    >
      {children}
    </BlockWrapper>
  ),
);

OtherProducts.childrenTypes = ['OtherProductsItem'];
