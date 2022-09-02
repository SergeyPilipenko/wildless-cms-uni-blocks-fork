import { JSX } from '@redneckz/uni-jsx';
import { HeadingType } from '../../ui-kit/Heading/HeadingContent';
import { ProductBlockInner } from '../ProductBlock/ProductBlockInner';
import type { BlockVersion } from '../../model/BlockVersion';
import type { ProductBlockInnerContent } from '../ProductBlock/ProductBlockContent';
import type { UniBlockProps } from '../../types';

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
        className={`flex grow-0 shrink-0 basis-full ${productGalleryStyleMap[version]} ${className}`}
        role="listitem"
      >
        <div className="p-10 flex grow">
          <ProductBlockInner
            className="pl-2.5 pt-2.5 pb-1.5 pr-[6.25rem]"
            context={context}
            headingType={headingType || 'h2'}
            {...block}
          />
        </div>
      </section>
    );
  },
);
