import { JSX } from '@redneckz/uni-jsx';
import { ProductBlockInner } from './ProductBlockInner';
import type { UniBlockProps } from '../../types';
import type { ProductBlockContent } from './ProductBlockContent';
import { VersionStyleMap } from '../../model/BlockVersion';

export interface ProductBlockProps extends ProductBlockContent, UniBlockProps {}

export const ProductBlock = JSX<ProductBlockProps>((props /* Get rid of image and benefits */) => {
  const { className = '', version = 'primary' } = props;

  return (
    <section className={`font-sans bg-white px-4 py-6 ${VersionStyleMap[version]} ${className}`}>
      <ProductBlockInner {...props} />
    </section>
  );
});
