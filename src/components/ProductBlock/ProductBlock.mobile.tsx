import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { ProductBlockContent } from './ProductBlockContent';
import { ProductBlockInner } from './ProductBlockInner';

export interface ProductBlockProps extends ProductBlockContent, UniBlockProps {}

export const ProductBlock = JSX<ProductBlockProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ titleSize, image, benefits, ...props } /* Get rid of image and benefits */) => {
    const { className } = props;
    return (
      <section
        className={`font-sans bg-white pt-10 pl-[50px] pb-[50px] pr-[7.5rem] ${className || ''}`}
      >
        <ProductBlockInner {...props} titleSize="L" />
      </section>
    );
  },
);
