import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/JSXBlock';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { BaseTile } from '../BaseTile/BaseTile';
import { Headline } from '../Headline/Headline';
import type { ProductBlockInnerContent } from './ProductBlockContent';
import { renderBenefit } from './renderBenefit';

export type ProductBlockInnerProps = ProductBlockInnerContent & UniBlockProps;

export const ProductBlockInner = JSX<ProductBlockInnerProps>(
  ({
    className = '',
    title,
    headlineVersion = 'L',
    description,
    benefits,
    benefitsVersion,
    buttons,
    image,
    items,
    version = 'primary',
    isDotted = true,
    textBlockClassName = '',
    ...rest
  }) => {
    const benefitsCount = benefits?.filter((_) => _.label)?.length;
    const benefitsContainerStyles = getBenefitsContainerStyles(benefitsCount);

    return (
      <div className={`flex grow justify-between items-stretch h-full ${className}`}>
        <div className={`flex flex-col ${textBlockClassName}`}>
          <Headline
            title={title}
            description={description}
            className={`!p-0 max-w-[600px]`}
            bgColorHeadline={version}
            headlineVersion={headlineVersion}
            align="left"
            {...rest}
          />
          <BaseTile
            buttons={
              buttons?.length ? (
                <ButtonSection buttons={buttons} className="flex gap-4" {...rest} />
              ) : null
            }
          >
            {benefitsCount ? (
              <div className={benefitsContainerStyles}>
                {benefits.map(renderBenefit(version, benefitsVersion))}
              </div>
            ) : null}
            {items?.length ? (
              <List
                className="mt-5 text-h6"
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

const getBenefitsContainerStyles = (benefitsCount = 0) =>
  `gap-6 mt-6 ${benefitsCount > 3 ? 'inline-grid grid-cols-[auto_auto]' : 'flex'}`;
