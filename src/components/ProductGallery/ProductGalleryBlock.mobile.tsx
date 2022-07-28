import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { TitleSize } from '../../ui-kit/Title/TitleProps';
import type { ProductBlockInnerCommonProps } from '../ProductBlock/ProductBlockContent';
import { ProductBlockInner } from '../ProductBlock/ProductBlockInner';

export interface ProductGalleryBlockProps extends UniBlockProps {
  titleSize?: TitleSize;
  block?: ProductBlockInnerCommonProps;
}

export const ProductGalleryBlock = JSX<ProductGalleryBlockProps>(
  ({ block, titleSize, context }) => {
    return (
      <section className="flex grow-0 shrink-0 basis-full px-4 py-6" role="listitem">
        <div className="flex grow">
          <ProductBlockInner context={context} titleSize={titleSize} {...block} />
        </div>
      </section>
    );
  },
);
