import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { OtherProductsContent } from './OtherProductsContent';
import { OtherProductsItem } from './OtherProductsItem';

export interface OtherProductsProps extends OtherProductsContent, UniBlockProps {}

export const OtherProducts = JSX<OtherProductsProps>(
  ({ blockItems, colorPalette, context, className = '', ...rest }) => {
    return (
      <BlockWrapper
        context={context}
        className={`font-sans text-primary-text ${className}`}
        {...rest}
      >
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
      </BlockWrapper>
    );
  },
);
