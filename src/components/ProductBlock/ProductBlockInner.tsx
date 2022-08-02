import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Img } from '../../ui-kit/Img';
import { BaseTile } from '../BaseTile/BaseTile';
import type { ProductBlockInnerCommonProps } from './ProductBlockContent';
import { renderBenefit } from './renderBenefit';

export type ProductBlockInnerProps = ProductBlockInnerCommonProps & UniBlockProps;

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
      <div className={`flex grow justify-between items-stretch ${className || ''}`}>
        <div className={'flex flex-col'}>
          <BaseTile
            context={context}
            title={title}
            headingType={headingType || 'h2'}
            description={description}
            items={items}
            buttons={buttons}
            version={version}
          >
            {benefits?.length ? (
              <div className="flex gap-6 mt-6 mb-3.5">
                {benefits.map((_, i) => renderBenefit(_, i, version))}
              </div>
            ) : null}
          </BaseTile>
        </div>
        {image?.src && <Img className="mt-auto" image={image} />}
      </div>
    );
  },
);
