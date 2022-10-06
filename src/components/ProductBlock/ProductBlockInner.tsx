import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { BaseTile } from '../BaseTile/BaseTile';
import type { ProductBlockInnerContent } from './ProductBlockContent';
import { renderBenefit } from './renderBenefit';
import { Headline } from '../Headline/Headline';

export type ProductBlockInnerProps = ProductBlockInnerContent & UniBlockProps;

export const ProductBlockInner = JSX<ProductBlockInnerProps>(
  ({
    className = '',
    context,
    title,
    headlineVersion = 'L',
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
    return (
      <div className={`flex grow justify-between items-stretch h-full ${className}`}>
        <div className={`flex flex-col ${textBlockClassName}`}>
          <Headline
            context={context}
            title={title}
            description={description}
            className={`!p-0 max-w-[600px]`}
            bgColorHeadline={version}
            headlineVersion={headlineVersion}
            align="left"
          />
          <BaseTile context={context} buttons={getButtons(context, buttons)}>
            {benefits?.filter((_) => _.label)?.length ? (
              <div className="flex gap-6 mt-6">
                {benefits.map((benefit, i) =>
                  renderBenefit({ benefit, version, benefitsVersion }, i),
                )}
              </div>
            ) : null}
            {items?.length ? (
              <List
                className="mt-5 text-h6 font-light"
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

const getButtons = (context, buttons) => {
  return buttons?.length ? (
    <ButtonSection context={context} buttons={buttons} className="flex gap-4" />
  ) : null;
};
