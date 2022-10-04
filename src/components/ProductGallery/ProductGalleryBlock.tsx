import { JSX } from '@redneckz/uni-jsx';
import { ProductBlockInner } from '../ProductBlock/ProductBlockInner';
import type { HeadlineProps } from '../../model/HeadlineType';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import type { ProductBlockInnerContent } from '../ProductBlock/ProductBlockContent';

const productGalleryStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export interface ProductGalleryBlockProps extends UniBlockProps {
  headlineVersion?: HeadlineProps;
  block?: ProductBlockInnerContent;
}

export const ProductGalleryBlock = JSX<ProductGalleryBlockProps>(
  ({ block, context, className = '' }) => {
    const version = block?.version ?? 'primary';

    return (
      <section
        className={`flex grow-0 shrink-0 basis-full px-4 pt-6 ${productGalleryStyleMap[version]} ${className}`}
        role="listitem"
      >
        <div className="flex grow">
          <ProductBlockInner context={context} {...block} />
        </div>
      </section>
    );
  },
);
