import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Img } from '../../ui-kit/Img';
import { BaseTile } from '../BaseTile/BaseTile';
import type { ProductBlockInnerCommonProps } from './ProductBlockContent';
import { renderBenefit } from './renderBenefit';

export interface ProductBlockInnerProps extends ProductBlockInnerCommonProps, UniBlockProps {}

export const ProductBlockInner = JSX<ProductBlockInnerProps>(
  ({
    className,
    context,
    title,
    headingType,
    description,
    benefits,
    buttons,
    image,
    items,
    version = 'primary',
  }) => {
    return (
      <div className={`${className || ''}`}>
        <div>
          <BaseTile
            context={context}
            title={title}
            headingType={headingType || 'h2'}
            description={description}
            items={items}
            buttons={buttons}
          >
            {benefits?.length ? (
              <div className="mt-[19px]">
                {benefits.map((_, i) => renderBenefit(_, i, version))}
              </div>
            ) : null}
          </BaseTile>
        </div>
        {image?.src && (
          <div className="mt-5">
            <Img image={{ className: 'block', ...image }} />
          </div>
        )}
      </div>
    );
  },
);
