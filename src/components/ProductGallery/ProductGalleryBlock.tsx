import { JSX } from '@redneckz/uni-jsx';
import { VersionStyleMap } from '../../model/BlockVersion';
import type { HeadlineProps } from '../../model/HeadlineType';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { ProductBlockInnerContent } from '../ProductBlock/ProductBlockContent';
import { ProductBlockInner } from '../ProductBlock/ProductBlockInner';

export interface ProductGalleryBlockProps extends UniBlockProps {
  headlineVersion?: HeadlineProps;
  block?: ProductBlockInnerContent;
}

export const ProductGalleryBlock = JSX<ProductGalleryBlockProps>(
  ({ block, context, className = '' }) => {
    const version = block?.version ?? 'primary';

    return (
      <section
        className={`flex grow-0 shrink-0 basis-full px-4 pt-6 ${VersionStyleMap[version]} ${className}`}
        role="listitem"
      >
        <div className="flex grow">
          <ProductBlockInner context={context} {...block} />
        </div>
      </section>
    );
  },
);
