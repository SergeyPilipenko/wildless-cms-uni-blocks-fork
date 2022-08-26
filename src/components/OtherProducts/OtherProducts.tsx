import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { OtherProductsContent } from './OtherProductsContent';
import { OtherProductsItem } from './OtherProductsItem';

export interface OtherProductsProps extends OtherProductsContent, UniBlockProps {}

export const OtherProducts = JSX<OtherProductsProps>(({ blockItems, context, className }) => {
  return (
    <section className={`font-sans bg-white text-primary-text ${className || ''}`}>
      {blockItems?.length ? (
        <div className="list-none m-0 p-0">
          {blockItems.map((item, i) => (
            <OtherProductsItem key={`BlockItem${i}`} {...item} context={context} />
          ))}
        </div>
      ) : null}
    </section>
  );
});
