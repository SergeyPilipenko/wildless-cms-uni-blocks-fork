import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { HeadingType } from '../../ui-kit/Heading/HeadingContent';
import type { ProductBlockInnerContent } from '../ProductBlock/ProductBlockContent';
import { ProductBlockInner } from '../ProductBlock/ProductBlockInner';

export interface ProductGalleryBlockProps extends UniBlockProps {
  headingType?: HeadingType;
  block?: ProductBlockInnerContent;
}

export const ProductGalleryBlock = JSX<ProductGalleryBlockProps>(
  ({ block, headingType, context }) => {
    return (
      <section className="flex grow-0 shrink-0 basis-full" role="listitem">
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
