import { JSX } from '@redneckz/uni-jsx';
import { VersionStyleMap } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { ProductBlockContent } from './ProductBlockContent';
import { ProductBlockInner } from './ProductBlockInner';

export interface ProductBlockProps extends ProductBlockContent, UniBlockProps {}

export const ProductBlock = JSX<ProductBlockProps>((props /* Get rid of image and benefits */) => {
  const { className = '', version = 'primary' } = props;

  return (
    <section className={`font-sans bg-white px-4 py-6 ${VersionStyleMap[version]} ${className}`}>
      <ProductBlockInner {...props} />
    </section>
  );
});
