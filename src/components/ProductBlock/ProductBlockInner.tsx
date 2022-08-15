import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Description } from '../../ui-kit/Description/Description';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { BaseTile } from '../BaseTile/BaseTile';
import type { ProductBlockInnerContent } from './ProductBlockContent';
import { renderBenefit } from './renderBenefit';

export type ProductBlockInnerProps = ProductBlockInnerContent & UniBlockProps;

export const ProductBlockInner = JSX<ProductBlockInnerProps>(
  ({
    className = '',
    context,
    title,
    headingType = 'h2',
    description,
    benefits,
    buttons,
    image,
    items,
    version = 'primary',
  }) => {
    return (
      <div className={`flex grow justify-between items-stretch ${className}`}>
        <div className={'flex flex-col'}>
          <BaseTile
            context={context}
            title={
              title && (
                <Heading
                  headingType={headingType}
                  title={title}
                  className="whitespace-pre-wrap max-w-[600px]"
                />
              )
            }
            buttons={
              buttons?.length ? (
                <ButtonSection context={context} buttons={buttons} className="flex mt-9 gap-3" />
              ) : null
            }
          >
            {description && (
              <Description className="text-m-base mt-4 max-w-[600px]" description={description} />
            )}
            {benefits?.length ? (
              <div className="flex gap-6 mt-6 mb-3.5">
                {benefits.map((_, i) => renderBenefit(_, i, version))}
              </div>
            ) : null}
            {items?.length ? (
              <List className="mt-5" items={items} itemClassName="mb-[10px]" version={version} />
            ) : null}
          </BaseTile>
        </div>
        {image?.src && <Img className="mt-auto" image={image} />}
      </div>
    );
  },
);
