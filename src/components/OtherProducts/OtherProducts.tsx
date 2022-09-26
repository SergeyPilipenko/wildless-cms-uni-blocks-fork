import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { OtherProductsContent } from './OtherProductsContent';
import { OtherProductsItem } from './OtherProductsItem';

export interface OtherProductsProps extends OtherProductsContent, UniBlockProps {}

export const OtherProducts = JSX<OtherProductsProps>(
  ({ blockItems, colorPalette, context, className = '' }) => {
    return (
      <section className={`font-sans text-primary-text ${className}`}>
        {blockItems?.length ? (
          <div className="box-border1">
            {blockItems.map((item, i) => (
              <OtherProductsItem
                key={`BlockItem${i}`}
                {...item}
                dataTheme={colorPalette}
                context={context}
              />
            ))}
          </div>
        ) : null}
      </section>
    );
  },
);
