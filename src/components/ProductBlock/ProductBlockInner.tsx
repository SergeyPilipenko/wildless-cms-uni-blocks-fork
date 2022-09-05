import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Description } from '../../ui-kit/Description/Description';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { Heading } from '../../ui-kit/Heading/Heading';
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
    isDotted = true,
    textBlockClassName = '',
  }) => {
    const textColor = version === 'secondary' ? 'text-white' : 'text-primary-text';
    return (
      <div className={`flex grow justify-between items-stretch ${className}`}>
        <div className={`flex flex-col ${textBlockClassName}`}>
          <BaseTile
            context={context}
            title={getTitle(title, headingType)}
            buttons={getButtons(context, buttons)}
          >
            {description && (
              <Description
                className={`mt-4 max-w-[600px] text-md font-light ${textColor}`}
                description={description}
              />
            )}
            {benefits?.filter((items) => items.label)?.length ? (
              <div className="flex gap-6 mt-6">
                {benefits.map((_, i) => renderBenefit(_, i, version))}
              </div>
            ) : null}
            {items?.length ? (
              <List
                className="mt-5 text-title-2xs font-light"
                items={items}
                itemClassName="mb-[7px]"
                version={version}
                isDotted={isDotted}
              />
            ) : null}
          </BaseTile>
        </div>
        {image?.src && <Img className="mt-auto" image={image} />}
      </div>
    );
  },
);

const getTitle = (title, headingType) => {
  return (
    title && (
      <Heading
        headingType={headingType}
        title={title}
        className="whitespace-pre-wrap max-w-[600px]"
      />
    )
  );
};

const getButtons = (context, buttons) => {
  return buttons?.length ? (
    <ButtonSection context={context} buttons={buttons} className="flex mt-9 gap-4" />
  ) : null;
};
