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
      <div className={`w-full text-primary-text ${className}`}>
        <div>
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
                <ButtonSection
                  context={context}
                  buttons={buttons}
                  className="flex flex-col mt-5 gap-2.5"
                />
              ) : null
            }
          >
            {description ? <Description className="mt-3" description={description} /> : null}
            {benefits?.length ? (
              <div className="mt-3">{benefits.map((_, i) => renderBenefit(_, i, version))}</div>
            ) : null}
            {items?.length ? <List className="mt-3" items={items} /> : null}
          </BaseTile>
        </div>
        {renderImage(image)}
      </div>
    );
  },
);

function renderImage(image) {
  return image?.src ? (
    <div className="mt-5">
      <Img image={{ className: 'block', ...image }} />
    </div>
  ) : null;
}
