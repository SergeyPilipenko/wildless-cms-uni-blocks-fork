import { JSX } from '@redneckz/uni-jsx';
import type { JSXBlock } from '../../model/BlocksRegistry';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { OtherProductsContent } from './OtherProductsContent';

export interface OtherProductsProps extends OtherProductsContent, UniBlockProps {}

export const OtherProducts = JSX<OtherProductsProps>(
  ({ context, className = '', children, ...rest }) => (
    <BlockWrapper
      context={context}
      className={`font-sans text-primary-text ${className}`}
      {...rest}
    >
      {children ? <div className="box-border1">{children}</div> : null}
    </BlockWrapper>
  ),
) as JSXBlock<OtherProductsProps>;

OtherProducts.childrenTypes = ['OtherProductsItem'];
