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
    benefitsVersion = 'normal',
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
            {description ? (
              <Description
                className={`mt-4 max-w-[600px] text-md font-light ${textColor}`}
                description={description}
              />
            ) : null}
            {benefits?.filter((items) => items.label)?.length ? (
              <div className="flex gap-6 mt-6">
                {benefits.map((benefit, i) =>
                  renderBenefit({ benefit, version, benefitsVersion }, i),
                )}
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
        {image?.src && <Img className="mt-[-50px]" image={image} />}
      </div>
    );
  },
);

const getTitle = (title, headingType) => {
  return title ? (
    <Heading
      headingType={headingType}
      title={title}
      className="whitespace-pre-wrap max-w-[600px]"
    />
  ) : null;
};

const getButtons = (context, buttons) => {
  return buttons?.length ? (
    <ButtonSection context={context} buttons={buttons} className="flex mt-9 gap-4" />
  ) : null;
};
