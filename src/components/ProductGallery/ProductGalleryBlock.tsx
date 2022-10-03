import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { HeadingType } from '../../ui-kit/Heading/HeadingContent';
import type { ProductBlockInnerContent } from '../ProductBlock/ProductBlockContent';
import { ProductBlockInner } from '../ProductBlock/ProductBlockInner';

const productGalleryStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export interface ProductGalleryBlockProps extends UniBlockProps {
  headingType?: HeadingType;
  block?: ProductBlockInnerContent;
}

export const ProductGalleryBlock = JSX<ProductGalleryBlockProps>(
  ({ block, headingType, context, className = '' }) => {
    const version = block?.version ?? 'primary';

    return (
      <section
        className={`flex grow-0 shrink-0 basis-full px-4 pt-6 ${productGalleryStyleMap[version]} ${className}`}
        role="listitem"
      >
        <div className="flex grow">
          <ProductBlockInner context={context} headingType={headingType || 'h2'} {...block} />
        </div>
      </section>
    );
  },
);
